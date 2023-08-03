import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import useFirebaseData from "../../Hooks/useFirebaseData";

import ProductDetail from "./ProductDetail";
import AddToCartButton from "../Common/AddToCartButton";


const ProductList = () => {
    const { data, loading, error } = useFirebaseData("products");



    if (loading) return (<div className="spinner-container"><CircularProgress sx={{ color: "#FF627E" }} /></div>)
    if (error) return (<div className="error-container"><Typography variant="h6" sx={{ color: "#8F8C8C" }}>{error}</Typography></div>)

    return (
        <div className="container">
            <Typography variant="h2" style={{
                color: "#8F8C8C", marginBottom: "20px"
            }}>Productos</Typography>
            <Grid container spacing={3}>
                {data.map((product) => {
                    return (<ProductDetail key={product.id} product={product}>
                        <AddToCartButton product={product} />
                    </ProductDetail>)
                })}
            </Grid>
        </div>
    );
};

export default ProductList;