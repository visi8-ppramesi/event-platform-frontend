import firebase from '../firebase.js'
import { 
    doc, 
    query, 
    startAt, 
    endAt, 
    collection, 
    getDocs, 
    getDoc, 
    addDoc,
} from "firebase/firestore";  
import { validatePostData } from '@/_services/validators.js';

export default class{
    static async createPost(id, text, images = []){
        const userRef = doc(firebase.db, 'users', firebase.auth.currentUser.uid)
        const postRef = collection(firebase.db, 'locations', id, 'posts')
        return await addDoc(postRef, {
            date: new Date(),
            user: userRef,
            status: 0,
            images,
            text: validatePostData(text),
        })
    }

    static async getLocation(id, withPosts = false){
        const promises = []

        const locationRef = doc(firebase.db, 'locations', id)
        const doc = getDoc(locationRef)
        promises.push(doc)

        if(withPosts){
            const postsRef = collection(firebase.db, 'locations', id, 'posts')
            const postsDoc = getDocs(postsRef)
            promises.push(postsDoc)
        }

        return await Promise.allSettled(promises)
    }

    static async getLocations(startAtParam = 0, endAtParam = 10, queries = []){
        const locationRef = collection(firebase.db, 'locations')
        const q = query(locationRef, startAt(startAtParam), endAt(endAtParam), ...queries)
        return await getDocs(q)
    }
}