import firebase from '../firebase.js'
import { doc, query, orderBy, startAt, endAt, collection, getDocs, getDoc } from "firebase/firestore";  

export default class{
    static async getArtist(id, withPosts = false){
        const promises = []

        eventRef = doc(firebase.db, 'events', id)
        const doc = getDoc(eventRef)
        promises.push(doc)

        if(withPosts){
            postsRef = collection(firebase.db, 'events', id, 'posts')
            const postsDoc = getDocs(postsRef)
            promises.push(postsDoc)
        }

        return await Promise.allSettled(promises)
    }

    static async getArtists(startAtParam = 0, endAtParam = 10, queries = []){
        const eventRef = collection(firebase.db, 'events')
        const q = query(eventRef, startAt(startAtParam), endAt(endAtParam), ...queries)
        return await getDocs(q)
    }

    static async toggleEventSubscribe(eventId){
        const uidRef = doc(db, 'users/' + firebase.auth.currentUser.uid)
        const eventIdRef = doc(db, 'events/' + eventId)
        const pivotRef = doc(db, 'users_events_subscribers/' + eventId)

        try {
            const rt = runTransaction(db, async (t) => {
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