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

const parseDocs = (docs, extraFields = []) => {
    const docsVals = Object.values(docs)
    let retVal = []
    for(let i = 0; i < docsVals.length; i++){
        const data = docsVals[i].data()
        data.doc = docsVals[i]
        extraFields.forEach((field) => {
            data[field] = docsVals[i][field]
        })
        data.id = docsVals[i].id
        retVal.push(data)
    }

    return retVal
}

export default { getBlob, getDataUrlFromStorage, constructArtistUrl, constructEventUrl, parseDocs }