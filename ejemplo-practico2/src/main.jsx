import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'firebase/firestore';
import dotenv from 'dotenv';
import products from './mocks/products.json';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDqscxxuWiZWrHu9lxCMUyT74Z7oqtTmAE",
  authDomain: "ecommerce-coderhouse-43300.firebaseapp.com",
  projectId: "ecommerce-coderhouse-43300",
  storageBucket: "ecommerce-coderhouse-43300.appspot.com",
  messagingSenderId: "35893893726",
  appId: "1:35893893726:web:f1484975755320195332cf"
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
