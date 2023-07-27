import { Button, ButtonBase, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import { useContext, } from "react";
import ProductDetail from "./ProductDetail";
import { CartContext } from "../../context/CartContext";
import useFirestore from "../../Hooks/useFirestore";

const ProductList = () => {
    const { data, loading } = useFirestore('products')
    const { addToCart } = useContext(CartContext)

    if (loading) return (<div className='spinner-container'><CircularProgress sx={{ color: "#FF627E" }} /></div>)

    return (<div className="container">
        <Typography variant='h2' sx={{ color: "#8F8C8C" }}>Productos</Typography>
        <Grid container spacing={3}>
            {
                data.map((product) => {
                    return <ProductDetail key={product.id} product={product}>
                        <Button onClick={() => addToCart(product)}>Agregar al carrito</Button>
                    </ProductDetail>
                })
            }
        </Grid>
    </div>);
}

export default ProductList;