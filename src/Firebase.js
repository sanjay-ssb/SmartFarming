import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC-yhovpWJIGq_BfEfDnXybgssNieGYcfk",
  authDomain: "smart-farming-126de.firebaseapp.com",
  projectId: "smart-farming-126de",
  storageBucket: "smart-farming-126de.appspot.com",
  messagingSenderId: "581997588234",
  appId: "1:581997588234:web:8ee5416ce013382cac94f3"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()
const storage=getStorage(firebaseApp);
export { db, auth ,storage};