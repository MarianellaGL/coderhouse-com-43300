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
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER,
  appId: import.meta.env.VITE_APP_ID
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
