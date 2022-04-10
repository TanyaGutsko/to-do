// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7kAx_5j5UnymJ1sW3aYQaB5C5TpflCaI",
    authDomain: "to-do-8f3d6.firebaseapp.com",
    projectId: "to-do-8f3d6",
    storageBucket: "to-do-8f3d6.appspot.com",
    messagingSenderId: "645101518420",
    appId: "1:645101518420:web:6e1d3d9a2e5fc23bfff7c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const FBFirestoreRef = app.firestore();
//
// export function refData(){
//     return FBFirestoreRef.collection('tasks')
// }

export default getFirestore();