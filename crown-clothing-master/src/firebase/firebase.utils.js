import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDL49VWLuzrgopypOSt5mSp1ccblSgT4-E",
  authDomain: "crown-db-9a1fe.firebaseapp.com",
  projectId: "crown-db-9a1fe",
  storageBucket: "crown-db-9a1fe.appspot.com",
  messagingSenderId: "909239551543",
  appId: "1:909239551543:web:04d88f12c567a529c561b2",
  measurementId: "G-REFM4E4TWH",
};

export const creatUserProfileDocument = async (userAuth, ...otherUserProps) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...otherUserProps });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
 return (await userRef);
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
