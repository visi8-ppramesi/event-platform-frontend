import firebase from '../firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, query, orderBy, startAt, endAt, collection, getDocs, setDoc, onSnapshot, where } from "firebase/firestore";  
// import { query, orderBy, startAt, endAt, collection, getDocs, onSnapshot, where } from "firebase/firestore";  
import { validateUserProfileData } from '@/_services/validators.js';

export default class{
    static getCurrentUser(){
        return firebase.auth.currentUser
    }

    static onAuthStateChanged(func){
        firebase.auth.onAuthStateChanged(func)
    }

    static async login(email, password){
        return await signInWithEmailAndPassword(firebase.auth, email, password)
    }

    static async register(email, password, userData){
        const validatedUserData = validateUserProfileData(userData)
        if(!validatedUserData){
            throw 'validator error'
        }
        return await createUserWithEmailAndPassword(firebase.auth, email, password).then(async (newUser) => {
            const newUserDocRef = doc(firebase.db, 'users', newUser.user.uid)
            console.log([newUserDocRef, validatedUserData, newUser.user.uid])
            const newProfile = await setDoc(newUserDocRef, validatedUserData)
            return {profile: newProfile, cred: newUser}
        })
        // .then((userDoc) => {
        //     //do something
        //     return userDoc
        // })
    }
    
    static async logout(){
        const { currentUser } = firebase.auth

        if(currentUser){
            return await signOut(firebase.auth)
        }
    }

    static async getNotification(followingParents, startAtParam = 0, endAtParam = 10){
        if(!firebase.auth.currentUser){
            return []
        }
        const feedRef = collection(firebase.db, 'feed')
        const queriedFeedRef = query(feedRef, where('parent', 'in', followingParents), startAt(startAtParam), endAt(endAtParam), orderBy('date', 'asc'))
        return await getDocs(queriedFeedRef)
    }

    static async createNotificationListener(followingParents, func){
        if(!firebase.auth.currentUser){
            return () => {}
        }
        const feedRef = collection(firebase.db, 'feed')
        const queriedFeedRef = query(feedRef, where('parent', 'in', followingParents))
        return onSnapshot(queriedFeedRef, func)
    }
}