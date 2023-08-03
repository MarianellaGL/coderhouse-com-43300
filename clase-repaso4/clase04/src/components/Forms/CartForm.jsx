import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartForm = () => {
    const { cart } = useContext(CartContext)

    //necesito mostrar la informacion de CART

    //necesito también revisar y eliminar ciertos elementos seleccionados

    //necesito que la informacion del buyer me venga correcta
    console.log(cart)

    return (<div className="cart-container">
        aaaaaaaaaaaaaaaaa
    </div>);
}

export default CartForm;