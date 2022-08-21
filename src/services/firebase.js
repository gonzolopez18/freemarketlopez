import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
  
  // apiKey: "AIzaSyARj2dAVHyILT4TuBkrApSdxBdTl7qH5ug",

  // authDomain: "free-market-coder.firebaseapp.com",

  // projectId: "free-market-coder",

  // storageBucket: "free-market-coder.appspot.com",

  // messagingSenderId: "610317138406",

  // appId: "1:610317138406:web:be53466ec7810bf2313e27"

  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const backend = getFirestore(app)