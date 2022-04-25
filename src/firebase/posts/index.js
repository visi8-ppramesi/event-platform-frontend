import firebase from '../firebase.js'
import { 
    doc, 
    // query, 
    // startAfter, 
    // endAt, 
    collection, 
    getDocs, 
    // getDoc, 
    addDoc, 
    onSnapshot,
    getDoc,
    query,
    limit,
    // runTransaction, 
    // arrayRemove, 
    // arrayUnion, 
    // increment,
    orderBy,
    startAfter,
    // limit
} from "firebase/firestore";  
import utils from '../utils/index.js';
import settings from '@/settings.js';
// import { validatePostData } from '@/_services/validators.js';

export default class{
    // static getEventPosts(eventId, limit = 10, startAfterParam = null){

    // }

    // static getArtistPosts(eventId, limit = 10, startAfterParam = null){

    // }

    static async createNewPostsListener(parentType, parentId, callback){
        const coll = collection(firebase.db, parentType, parentId, 'posts')
        return onSnapshot(query(coll, orderBy('date', 'desc'), limit(1)), callback)
    }

    static async loadMorePosts(parentType, parentId, startAfterParam){
        const postsRef = collection(firebase.db, parentType, parentId, 'posts')
        const postsDoc = await getDocs(query(postsRef, orderBy('date', 'desc'), limit(settings.maxLoadPosts), startAfter(startAfterParam)))
        return utils.parseDocs(postsDoc.docs)
    }

    static async createPost(parentType, parentId, text){
        if(!firebase.auth.currentUser){
            return false
        }
        const parentRef = doc(firebase.db, parentType, parentId)
        const { name, profile_picture } = (await getDoc(doc(firebase.db, 'users', firebase.auth.currentUser.uid))).data()
        const postColl = collection(parentRef, 'posts')
        return await addDoc(postColl, {
            date: new Date(),
            text,
            user: doc(firebase.db, 'users', firebase.auth.currentUser.uid),
            user_data: {
                name, profile_picture
            },
            status: 0
        })
    }

    static async * generatorPosts(posts){
        console.log(posts)
        for(const post of posts){
            if(/^gs:\/\//.test(post.user_data.profile_picture)){
                post.user_data.profile_picture = await utils.getDataUrlFromStorage(post.user_data.profile_picture)
            }

            yield post
        }
    }
}