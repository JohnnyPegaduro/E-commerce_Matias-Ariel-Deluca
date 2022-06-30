import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB4Ydlg8e6LZzuOxY-FrEdqQ-6Dy_lqGIk",
    authDomain: "matiasdeluca-e-commerce.firebaseapp.com",
    projectId: "matiasdeluca-e-commerce",
    storageBucket: "matiasdeluca-e-commerce.appspot.com",
    messagingSenderId: "760674737615",
    appId: "1:760674737615:web:86b74239e613b0c8e846ba"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}

