// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt4niwjkauJ-o-K3xjQQW1EfwDXHrjWfE",
  authDomain: "postings-19356.firebaseapp.com",
  projectId: "postings-19356",
  storageBucket: "postings-19356.appspot.com",
  messagingSenderId: "371284961715",
  appId: "1:371284961715:web:758d4afe5c67c4a9bdc3c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
