import firebase from '../firebase.js'
import { getBlob as getStorageBlob, ref } from 'firebase/storage'

const getBlob = async (gsPath) => {
    return await getStorageBlob(ref(firebase.storage, gsPath))
}

const getDataUrlFromStorage = async (gsPath) => {
    const blob = await getBlob(gsPath)
    return await new Promise((resolve, reject) => {
        var a = new FileReader();
        a.onload = function(e) {
            resolve(e.target.result);
        }
        a.onerror = function(e){
            reject(e);
        }
        a.readAsDataURL(blob);
    })
}

const constructEventUrl = (eventId) => {
    return 'https://localhost:8080/event/' + eventId
}

const constructArtistUrl = (artistId) => {
    return 'https://localhost:8080/artist/' + artistId
}

export default { getBlob, getDataUrlFromStorage, constructArtistUrl, constructEventUrl }