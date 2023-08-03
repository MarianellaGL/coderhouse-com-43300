import { arrayUnion, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { app } from "../main";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const db = getFirestore(app);
    const [cart, setCart] = useState({ buyer: { name: "", phone: "", email: "" }, items: [], total: 0 })

    const addToCart = (product) => {
        const userId = "9yXejSnQWwKRrj4kBBor";

        const cartRef = doc(db, "cart", userId);
        getDoc(cartRef).then((doc) => {
            //esta condicion verifica solo si el documento existe pero, ¿que pasa si no existe?
            if (doc.exists()) {
                updateDoc(cartRef, {
                    items: arrayUnion(product),
                    total: cart.total + product.price
                }).then(() => {
                    console.log("producto agregado al carrito")
                    setCart((prev) => ({
                        ...prev,
                        items: [...prev.items, product],
                        total: prev.total + product.price
                    }))
                })
                    .catch((error) => {
                        console.error("error al agregar producto al carrito", error)
                    })
            } else {
                //si el doc no existe lo creamos
                setDoc(cartRef, {
                    buyer: {
                        name: "userHost",
                        phone: 1111111111,
                        email: "lala@lala.com"
                    },
                    items: [product],
                    total: product.price
                }).then(() => {
                    console.log("carrito creado")
                    setCart({
                        buyer: {
                            name: "userHost",
                            phone: 1111111111,
                            email: "lala@lala.com"
                        },
                        items: [product],
                        total: product.price
                    })

                }).catch((error) => { console.error(error) })
            }
        })
        //setCart((prevCart) => (Array.isArray(prevCart) ? [...prevCart, product] : [product]))
    }

    return <CartContext.Provider value={{ cart, addToCart }}>
        {children}
    </CartContext.Provider>
}

//export default CartProvider;

