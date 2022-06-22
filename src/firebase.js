import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoh9BAGqMzV0axiB9KPVUIrF7dhBILM1g",
  authDomain: "linkedin-clone2-39842.firebaseapp.com",
  projectId: "linkedin-clone2-39842",
  storageBucket: "linkedin-clone2-39842.appspot.com",
  messagingSenderId: "693429654482",
  appId: "1:693429654482:web:fe4e0342604fa8cdbfae0b",
  measurementId: "G-C4BPELJJJX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };