import firebase from '../firebase.js'
import { 
    doc, 
    query, 
    startAfter, 
    // endAt, 
    collection, 
    getDocs, 
    getDoc, 
    addDoc, 
    runTransaction, 
    arrayRemove, 
    arrayUnion, 
    increment,
    orderBy,
    limit
} from "firebase/firestore";  
import { validatePostData } from '@/_services/validators.js';

export default class{
    static async createPost(id, text, images = []){
        const userRef = doc(firebase.db, 'users', firebase.auth.currentUser.uid)
        const postRef = collection(firebase.db, 'events', id, 'posts')
        return await addDoc(postRef, {
            date: new Date(),
            user: userRef,
            status: 0,
            images,
            text: validatePostData(text), 
        })
    }

    static async getEvent(id, withPosts = false){
        const promises = []

        const eventRef = doc(firebase.db, 'events', id)
        const doc = getDoc(eventRef)
        promises.push(doc)

        if(withPosts){
            const postsRef = collection(firebase.db, 'events', id, 'posts')
            const postsDoc = getDocs(postsRef)
            promises.push(postsDoc)
        }

        return await Promise.allSettled(promises)
    }

    static async getEvents(limitParam = 10, startAfterParam = null){
        const eventRef = collection(firebase.db, 'events')
        let q;
        if(startAfterParam){
            q = query(eventRef, orderBy('name'), limit(limitParam), startAfter(startAfterParam))
        }else{
            q = query(eventRef, orderBy('name'), limit(limitParam))
        }
        return await getDocs(q)
    }

    static async toggleEventSubscribe(eventId){
        if(!firebase.auth.currentUser){
            return -1
        }
        const uidRef = doc(firebase.db, 'users/' + firebase.auth.currentUser.uid)
        const eventIdRef = doc(firebase.db, 'events/' + eventId)
        const pivotRef = doc(firebase.db, 'users_events_subscribers/' + eventId)

        try {
            const rt = runTransaction(firebase.db, async (t) => {
                const uDoc = t.get(uidRef)
                const eDoc = t.get(eventIdRef)
                const pDoc = t.get(pivotRef)

                const docs = await Promise.all([uDoc, eDoc, pDoc])

                docs.forEach((doc) => {
                    if (!doc.exists()) {
                        throw "Document does not exist!";
                    }
                })

                const userData = docs[0].data()
                const { cover_picture, name } = docs[1].data()

                const followingObj = userData.following.filter((fol) => {
                    return fol.parent.id == eventId && fol.parent_type == 'events'
                })
                if(followingObj.length > 0){
                    t.update(uidRef, {following: arrayRemove(followingObj[0])})
                    t.update(eventIdRef, {subscribers: increment(-1)})
                    t.update(pivotRef, {users: arrayRemove(uidRef)})
                }else{
                    t.update(uidRef, {following: arrayUnion({
                        parent: eventIdRef,
                        parent_type: 'events',
                        data: {
                            cover_picture,
                            name
                        }
                    })})
                    t.update(eventIdRef, {subscribers: increment(1)})
                    t.update(pivotRef, {users: arrayUnion(uidRef)})
                }
            });
            return rt
        } catch (e) {
            // This will be a "population is too big" error.
            console.error(e);
        }
    }
}