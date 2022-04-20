import firebase from '../firebase.js'
import { 
    doc, 
    query, 
    startAfter, 
    collection, 
    getDocs, 
    getDoc, 
    addDoc, 
    runTransaction, 
    arrayRemove, 
    arrayUnion, 
    increment, 
    orderBy,
    limit,
} from "firebase/firestore";  
import { validatePostData } from '@/_services/validators.js';

export default class{
    static async createPost(id, text, images = []){
        const userRef = doc(firebase.db, 'users', firebase.auth.currentUser.uid)
        const postRef = collection(firebase.db, 'artists', id, 'posts')
        return await addDoc(postRef, {
            date: new Date(),
            user: userRef,
            status: 0,
            images,
            text: validatePostData(text), 
        })
    }

    static async getArtist(id, withPosts = false){
        const promises = []

        const artistsRef = doc(firebase.db, 'artists', id)
        const doc = getDoc(artistsRef)
        promises.push(doc)

        if(withPosts){
            const postsRef = collection(firebase.db, 'artists', id, 'posts')
            const postsDoc = getDocs(postsRef)
            promises.push(postsDoc)
        }

        return await Promise.allSettled(promises)
    }

    static async getArtists(limitParam = 10, startAfterParam = null){
        const artistRef = collection(firebase.db, 'artists')
        let q;
        if(startAfterParam){
            q = query(artistRef, orderBy('name'), limit(limitParam), startAfter(startAfterParam))
        }else{
            q = query(artistRef, orderBy('name'), limit(limitParam))
        }
        return await getDocs(q)
    }

    static async toggleArtistFollow(artistId){
        if(!firebase.auth.currentUser){
            return -1
        }
        const uidRef = doc(firebase.db, 'users/' + firebase.auth.currentUser.uid)
        const artistIdRef = doc(firebase.db, 'artists/' + artistId)
        const pivotRef = doc(firebase.db, 'users_artist_followings/' + artistId)

        try {
            return await runTransaction(firebase.db, async (t) => {
                const uDoc = t.get(uidRef)
                const eDoc = t.get(artistIdRef)
                const pDoc = t.get(pivotRef)

                const docs = await Promise.all([uDoc, eDoc, pDoc])

                docs.forEach((doc) => {
                    if (!doc.exists()) {
                        throw "Document does not exist!";
                    }
                })

                const userData = docs[0].data()
                const { profile_picture, name } = docs[1].data()

                const followingObj = userData.following.filter((fol) => {
                    return fol.parent.id == artistId && fol.parent_type == 'artists'
                })
                if(followingObj.length > 0){
                    t.update(uidRef, {following: arrayRemove(followingObj[0])})
                    t.update(artistIdRef, {fans: increment(-1)})
                    t.update(pivotRef, {users: arrayRemove(uidRef)})
                }else{
                    t.update(uidRef, {following: arrayUnion({
                        parent: artistIdRef,
                        parent_type: 'artists',
                        data: {
                            profile_picture,
                            name
                        }
                    })})
                    t.update(artistIdRef, {fans: increment(1)})
                    t.update(pivotRef, {users: arrayUnion(uidRef)})
                }
            });
        } catch (e) {
            // This will be a "population is too big" error.
            console.error(e);
        }
    }
}