import firebase from '../firebase.js'
import { collection, orderBy, startAt, endAt, query, getDocs } from 'firebase/firestore'
import { getBlob as getStorageBlob, ref } from 'firebase/storage'
import geofire from 'geofire-common'

const getBlob = async (gsPath) => {
    return await getStorageBlob(ref(firebase.storage, gsPath))
}

const getDataUrlFromStorage = async (gsPath) => {
    const blob = await getBlob(gsPath)

    // var img = document.createElement('img');
    // let url = URL.createObjectURL(blob)
    // img.src = url
    // document.getElementById('app').appendChild(img);
    // img.onload = () => {
    //     URL.revokeObjectURL(url)
    // }
    
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

const locationQuery = (db, geopointField, coll, center, distance) => {
    const collRef = collection(db, coll)
    const bounds = geofire.geohashQueryBounds(center, distance);
    const promises = [];
    for (const b of bounds) {
        promises.push(getDocs(query(collRef, orderBy('geohash'), startAt(b[0]), endAt(b[1]))))
    }

    return Promise.all(promises).then((snapshots) => {
        const matchingDocs = [];

        for (const snap of snapshots) {
            for (const doc of snap.docs) {
                const [ lat, lng ] = Object.values(doc.get(geopointField).toJSON())

                // We have to filter out a few false positives due to GeoHash
                // accuracy, but most will match
                const distanceInKm = geofire.distanceBetween([lat, lng], center);
                const distanceInM = distanceInKm * 1000;
                if (distanceInM <= distance) {
                    matchingDocs.push(doc);
                }
            }
        }

        return matchingDocs;
    })
}

export default { getBlob, getDataUrlFromStorage, constructArtistUrl, constructEventUrl, parseDocs, locationQuery }