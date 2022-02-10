import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBj6_HH1Mu77On0pD_cSygmKe270KtRjjU",
    authDomain: "hot-onion-restaurant-ad25c.firebaseapp.com",
    projectId: "hot-onion-restaurant-ad25c",
    storageBucket: "hot-onion-restaurant-ad25c.appspot.com",
    messagingSenderId: "41542408729",
    appId: "1:41542408729:web:7ef95e1b830fb1d726a888"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);