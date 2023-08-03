import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//importar para exportar mi json de data 
//import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSb7l_5XujJ9u7DrZOtLIPXdAjh4MOo6Q",
  authDomain: "ecommerce-zapatopolis.firebaseapp.com",
  projectId: "ecommerce-zapatopolis",
  storageBucket: "ecommerce-zapatopolis.appspot.com",
  messagingSenderId: "97290382655",
  appId: "1:97290382655:web:697c0416cb282d86edf78a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);

//iterar sobre los datos del mock para que me suba cada objeto a firestore

/*products.forEach((product) => {
  //addDoc funcion que llamo desde firestore, collection funcion desde firestore
  //db variable que llama a getFirestore, "products" es el nombre de nuestra colección

  addDoc(collection(db, 'products'), product)
    .then((docRef) => {
      console.log("documento agregado con id ", docRef.id)
    })
    .catch((error) => {
      console.error("error al agregar el documento", error)
    })
})*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
