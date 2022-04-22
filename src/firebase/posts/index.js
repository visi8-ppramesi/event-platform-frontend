import firebase from '../firebase.js'
import { 
    doc, 
    // query, 
    // startAfter, 
    // endAt, 
    collection, 
    // getDocs, 
    // getDoc, 
    addDoc, 
    // runTransaction, 
    // arrayRemove, 
    // arrayUnion, 
    // increment,
    // orderBy,
    // limit
} from "firebase/firestore";  
// import { validatePostData } from '@/_services/validators.js';

export default class{
    // static getEventPosts(eventId, limit = 10, startAfterParam = null){

    // }

    // static getArtistPosts(eventId, limit = 10, startAfterParam = null){

    // }

    static async createPost(parentType, parentId, text){
        if(!firebase.auth.currentUser){
            return false
        }
        const parentRef = doc(firebase.db, parentType, parentId)
        const postColl = collection(parentRef, 'posts')
        return await addDoc(postColl, {
            date: new Date(),
            text,
            user: doc(firebase.db, 'users', firebase.auth.currentUser.uid),
            status: 0
        })
    }
}