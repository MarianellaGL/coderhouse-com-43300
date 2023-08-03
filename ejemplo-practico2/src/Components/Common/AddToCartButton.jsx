import { useContext } from "react";
import { Button } from "@mui/material";
import { CartContext } from "../../Context/CartContext";
import PropTypes from 'prop-types';
import { ThemeContext } from "../../Context/ThemeContext";

const AddToCartButton = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { darkTheme } = useContext(ThemeContext)

    return (
        <Button
            className="button-add-to-cart"
            variant="contained"
            fullWidth
            style={{ backgroundColor: darkTheme ? "#33082E" : "#FF627E", alignSelf: "end" }}
            onClick={() => addToCart(product)}
        >
            Agregar al carrito
        </Button>
    );
};

AddToCartButton.propTypes = {
    product: PropTypes.shape({}).isRequired
}

export default AddToCartButton;