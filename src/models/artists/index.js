import firebase from '../firebase.js'
import { doc, query, orderBy, startAt, endAt, collection, getDocs, getDoc } from "firebase/firestore";  

export default class{
    static async getArtist(id, withPosts = false){
        const promises = []

        artistsRef = doc(firebase.db, 'artists', id)
        const doc = getDoc(artistsRef)
        promises.push(doc)

        if(withPosts){
            postsRef = collection(firebase.db, 'artists', id, 'posts')
            const postsDoc = getDocs(postsRef)
            promises.push(postsDoc)
        }

        return await Promise.allSettled(promises)
    }

    static async getArtists(startAtParam = 0, endAtParam = 10, queries = []){
        const artistRef = collection(firebase.db, 'artists')
        const q = query(artistRef, startAt(startAtParam), endAt(endAtParam), ...queries)
        return await getDocs(q)
    }

    static async toggleArtistFollow(artistId){
        const uidRef = doc(db, 'users/' + firebase.auth.currentUser.uid)
        const artistIdRef = doc(db, 'artists/' + artistId)
        const pivotRef = doc(db, 'users_artist_followings/' + artistId)

        try {
            return await runTransaction(db, async (t) => {
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