import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfzBFv3wqkMYcdJy6EkaI7J7A3q2kTRms",
  authDomain: "webrazzi-clone.firebaseapp.com",
  projectId: "webrazzi-clone",
  storageBucket: "webrazzi-clone.appspot.com",
  messagingSenderId: "123708506518",
  appId: "1:123708506518:web:d28c93c236c61473525db7",
};
initializeApp(firebaseConfig);

export const db = getFirestore();
