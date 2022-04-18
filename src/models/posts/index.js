import firebase from '../firebase.js'
import { doc, query, orderBy, startAt, endAt, collection, getDocs, getDoc, where } from "firebase/firestore";

export default class{
    static async getEventPagePosts(eventId){
        const eventRef = doc(firebase.db, 'events', eventId)
        const postRef = collection(firebase.db, 'posts')
        const q = query(postRef, where(''))
    }

    static async getArtistPagePosts(artistId){

    }
}