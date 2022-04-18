import firebase from "../firebase";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import { validateImage } from "@/_services/validators";
/*
    so uploading images has to be handled by firebase functions, no two way about it.
    has to be renamed and check for file type (use security rules), otherwise security breach. 
*/
export default class{
    static async uploadImages(files){
        const validatedFiles = []
        files.forEach(file => {
            const temp = validateImage(file)
            if(!temp){
                throw 'not image! fuck you!'
            }
            validatedFiles.push(temp)
        });

        const promises = [];

        for (var i = 0; i < validatedFiles.length; i++) {
            // validatedFiles.values contains all the validatedFiles objects
            const file = validatedFiles[i];
            const metadata = {
                contentType: file.type,
            };
            const storageRef = ref(firebase.storage, "images/" + file.name);
            promises.push(uploadBytes(storageRef, file, metadata).then(uploadResult => {return getDownloadURL(uploadResult.ref)}))
        }
      
        return await Promise.all(promises);
    }
}