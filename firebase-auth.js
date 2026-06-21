import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCOBJ22snwOow8xfQnL2WmCusmyS8iWWlk",
  authDomain: "educore-c3b42.firebaseapp.com",
  projectId: "educore-c3b42",
  storageBucket: "educore-c3b42.firebasestorage.app",
  messagingSenderId: "750509780814",
  appId: "1:750509780814:web:f57bddff39c7668b3cf81f",
  measurementId: "G-LF317C03Q0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, auth, db, storage, analytics };
