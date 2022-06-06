import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW_mYufifgSYE1APzG5UsPKNH2lqRhss4",
  authDomain: "js-ev-9.firebaseapp.com",
  projectId: "js-ev-9",
  storageBucket: "js-ev-9.appspot.com",
  messagingSenderId: "698995077289",
  appId: "1:698995077289:web:444e3532313361356779b8",
};
export default fire.initializeApp(firebaseConfig);
