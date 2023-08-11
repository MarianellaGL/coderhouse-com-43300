import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.STORAGE,
  messagingSenderId: import.meta.env.MESSAGE,
  appId: import.meta.env.APP_ID
};

export const app = initializeApp(firebaseConfig)
// Initialize Firebase
/*const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log(firebaseConfig)

// Itera sobre los datos del mock y sube cada objeto a Firestore
products.forEach((objeto) => {
  addDoc(collection(db, 'products'), objeto)
    .then((docRef) => {
      console.log("Documento agregado con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al agregar el documento: ", error);
    });
});
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
