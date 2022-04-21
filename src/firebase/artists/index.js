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
// import { getBlob, ref } from 'firebase/storage';
import { validatePostData } from '@/_services/validators.js';
import utils from '../utils/index.js'

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
        const docResult = getDoc(artistsRef)
        promises.push(docResult)

        if(withPosts){
            const postsRef = collection(firebase.db, 'artists', id, 'posts')
            const postsDoc = getDocs(postsRef)
            promises.push(postsDoc)
        }
        let artist
        await Promise.allSettled(promises).then((res) => {
            artist = res[0].data()
            if(withPosts){
                artist.posts = res[1].data()
            }
        })

        return artist
    }

    static async getArtists(limitParam = 10, startAfterParam = null, queries = []){
        const artistRef = collection(firebase.db, 'artists')
        let q;
        if(startAfterParam){
            q = query(artistRef, orderBy('name'), limit(limitParam), startAfter(startAfterParam), ...queries)
        }else{
            q = query(artistRef, orderBy('name'), limit(limitParam), ...queries)
        }
        const snap = await getDocs(q)
        const docs = Object.values(snap.docs)
        const artists = []
        for(let i = 0; i < docs.length; i++){
            const data = docs[i].data()
            data.ref = docs[i].ref
            artists.push(data)
        }
        return artists
    }

    static async getArtistsWithProfileDataUrl(limitParam = 10, startAfterParam = null, queries = []){
        const artistRef = collection(firebase.db, 'artists')
        let q;
        if(startAfterParam){
            q = query(artistRef, orderBy('name'), limit(limitParam), startAfter(startAfterParam), ...queries)
        }else{
            q = query(artistRef, orderBy('name'), limit(limitParam), ...queries)
        }
        const snap = await getDocs(q)
        const docs = Object.values(snap.docs)
        const artists = []
        const promises = []
        for(let i = 0; i < docs.length; i++){
            const data = docs[i].data()
            promises.push(utils.getDataUrlFromStorage(data.profile_picture).then((image) => {
                data.profile_picture = image
                data.doc = docs[i]
                artists.push(data)
            }))
            // const blob = await getBlob(ref(firebase.storage, data.profile_picture));//getBlob(data.profile_picture)
            // const newProfilePicture = await new Promise((resolve, reject) => {
            //     var a = new FileReader();
            //     a.onload = function(e) {
            //         resolve(e.target.result);
            //     }
            //     a.onerror = function(e){
            //         reject(e);
            //     }
            //     a.readAsDataURL(blob);
            // })
            // data.profile_picture = newProfilePicture
        }
        await Promise.allSettled(promises)
        return artists
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