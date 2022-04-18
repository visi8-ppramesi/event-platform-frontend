import firebase from '../firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, query, orderBy, startAt, endAt, collection, getDocs, setDoc, onSnapshot, where } from "firebase/firestore";  
import { validateUserProfileData } from '@/_services/validators.js';

export default class{
    static async login(email, password){
        return await signInWithEmailAndPassword(firebase.auth, email, password)
    }

    static async register(email, password, userData){
        return await createUserWithEmailAndPassword(firebase.auth, email, password).then((newUser) => {
            const newUserDocRef = doc(firebase.db, 'users', newUser.user.uid)
            return setDoc(newUserDocRef, validateUserProfileData(userData))
        })
        .then((userDoc) => {
            //do something
            return userDoc
        })
        .catch((ev) => {
            throw ev
        })
    }
    
    static async logout(){
        const { currentUser } = firebase.auth

        if(currentUser){
            return await signOut(firebase.auth)
        }
    }

    static async getNotification(followingParents, startAtParam = 0, endAtParam = 10){
        const feedRef = collection(firebase.db, 'feed')
        const queriedFeedRef = query(feedRef, where('parent', 'in', followingParents), startAt(startAtParam), endAt(endAtParam), orderBy('date', 'asc'))
        return await getDocs(queriedFeedRef)
    }

    static async createNotificationListener(followingParents, func){
        const feedRef = collection(firebase.db, 'feed')
        const queriedFeedRef = query(feedRef, where('parent', 'in', followingParents))
        return onSnapshot(queriedFeedRef, func)
    }
}