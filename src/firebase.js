import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr7DkM3k36TARHmQ07dBO7W3T5yizE_sU",
  authDomain: "facebook-clone-8584d.firebaseapp.com",
  databaseURL: "https://facebook-clone-8584d.firebaseio.com",
  projectId: "facebook-clone-8584d",
  storageBucket: "facebook-clone-8584d.appspot.com",
  messagingSenderId: "1013245719942",
  appId: "1:1013245719942:web:9251a77c2c0af3ed4ae807",
  measurementId: "G-V4EK3JS04F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storageRef = firebase.storage();
  // const provider = new firebase.auth.FacebookAuthProvider();

  export {auth,provider,storageRef}
  export default db;