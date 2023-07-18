import { CircularProgress, Grid, Typography } from "@mui/material";
import useMockData from "../../Hooks/useMockData";
import products from '../../mocks/products.json'
import ProductDetail from "./ProductDetail";


const ProductList = () => {
    const { data, loading } = useMockData(products)

    if (loading) return (<div className='spinner-container'><CircularProgress sx={{ color: "#FF627E" }} /></div>)



    return (<div className="container">
        <Typography variant='h2' sx={{ color: "#8F8C8C" }}>Productos</Typography>
        <Grid container spacing={3}>
            {
                data.map((product) => {
                    return <ProductDetail key={product.id} product={product} />
                })
            }
        </Grid>
    </div>);
}

export default ProductList;