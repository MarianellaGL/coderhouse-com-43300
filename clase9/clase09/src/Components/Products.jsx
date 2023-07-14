import { Grid, CircularProgress, Container, Typography } from "@mui/material";
import useFetch from "../Hooks/UseFetch";
import ProductCard from "./ProductCard";

const Products = () => {
    const { data, loading, error } = useFetch("https://fakestoreapi.com/products")

    if (loading) return <CircularProgress color="secondary" />
    if (error) return <Typography>Ups!</Typography>


    return (
        <>
            <Container sx={{ display: "flex", justifyContent: "space-around" }}>
                <Grid sx={{ display: "grid", gridTemplateColumns: "350px 350px 350px 350px" }} >
                    {
                        data.map((product, index) => { return <ProductCard key={index} product={product} /> })
                    }
                </Grid>
            </Container>
        </>
    );
}

export default Products;