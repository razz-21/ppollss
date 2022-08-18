import { initializeApp, getApps, type FirebaseApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3bIdIPYsAbhj-aBopAOeqVeTO-tltjqI",
  authDomain: "ppollss.firebaseapp.com",
  projectId: "ppollss",
  storageBucket: "ppollss.appspot.com",
  messagingSenderId: "977744664999",
  appId: "1:977744664999:web:bc52908964f499cd387e82",
  measurementId: "G-JTF3T4FY3Z"
};

export const initialise: () => FirebaseApp = () => {
  if (getApps().length) return getApp();

  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
  }

  return app;
}

export const firestore = getFirestore(initialise());