import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAZw1dzODRRVZPiNzt-dIWxba1DeGrl18",
  authDomain: "interviewiq-ab63c.firebaseapp.com",
  projectId: "interviewiq-ab63c",
  storageBucket: "interviewiq-ab63c.firebasestorage.app",
  messagingSenderId: "56823175780",
  appId: "1:56823175780:web:546fd53a4870c255859d71"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();