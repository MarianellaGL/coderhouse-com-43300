import { createContext, useEffect, useState } from "react";
import { app } from "../main";
import { arrayRemove, arrayUnion, doc, getDoc, getFirestore, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const db = getFirestore(app);
    const [cart, setCart] = useState({
        buyer: {
            name: "",
            phone: "",
            email: "",
        },
        items: [],
        total: 0,
    });

    const addToCart = (product) => {
        const userId = 'hostuser'; // Reemplaza con el ID real del usuario

        const cartRef = doc(db, 'carts', userId);
        // Comprueba si el documento del carrito ya existe antes de actualizarlo
        getDoc(cartRef)
            .then((doc) => {
                if (doc.exists()) {
                    // Si el documento existe, actualiza el carrito
                    updateDoc(cartRef, {
                        items: arrayUnion(product),
                        total: cart.total + product.price,
                    })
                        .then(() => {
                            console.log("Producto agregado al carrito en Firestore");
                            setCart((prev) => ({
                                ...prev,
                                items: [...prev.items, product],
                                total: prev.total + product.price,
                            }));
                        })
                        .catch((error) => {
                            console.error("Error al agregar producto al carrito:", error);
                        });
                } else {
                    // Si el documento no existe, crea el carrito con el producto inicial
                    setDoc(cartRef, {
                        buyer: {
                            name: "userHost",
                            phone: "1111111",
                            email: "lala@lala.com",
                        },
                        items: [product],
                        total: product.price,
                    })
                        .then(() => {
                            console.log("Carrito creado con el producto inicial en Firestore");
                            setCart({
                                buyer: {
                                    name: "",
                                    phone: "",
                                    email: "",
                                },
                                items: [product],
                                total: product.price,
                            });
                        })
                        .catch((error) => {
                            console.error("Error al crear el carrito:", error);
                        });
                }
            })
            .catch((error) => {
                console.error("Error al verificar si el documento del carrito existe:", error);
            });
    };

    const removeFromCart = (product) => {
        const userId = 'hostuser'; // Reemplaza con el ID real del usuario
        const cartRef = doc(db, 'carts', userId);

        // Elimina el producto del carrito en Firestore
        updateDoc(cartRef, {
            items: arrayRemove(product),
            total: cart.total - product.price,
        })
            .then(() => {
                console.log("Producto eliminado del carrito en Firestore");
                // Actualiza el estado del carrito local si es necesario
                setCart((prevCart) => ({
                    ...prevCart,
                    items: prevCart.items.filter((item) => item.id !== product.id),
                    total: prevCart.total - product.price,
                }));
            })
            .catch((error) => {
                console.error("Error al eliminar producto del carrito:", error);
            });
    };

    const updateBuyerInfo = (buyerInfo) => {
        setCart((prev) => ({
            ...prev,
            buyer: buyerInfo,
        }));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateBuyerInfo }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;