// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHgcRlg9C5G71bcQZGnXfz1DnZ1NHAp-I",
  authDomain: "netflix-clone-961c8.firebaseapp.com",
  projectId: "netflix-clone-961c8",
  storageBucket: "netflix-clone-961c8.appspot.com",
  messagingSenderId: "404902400010",
  appId: "1:404902400010:web:ebe658a41b64c9052a4ff3",
  measurementId: "G-VMPBW4409N"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }