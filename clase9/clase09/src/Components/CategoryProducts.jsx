import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import ProductCard from "./ProductCard";

const CategoryProduct = () => {
    const { category } = useParams();
    const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/category/${category}`)

    if (loading) <CircularProgress color="secondary" />
    if (error) return <Typography>ups!</Typography>


    return (<>
        <Container sx={{ display: "flex", justifyContent: "space-around" }}>
            <Grid sx={{ display: "grid", gridTemplateColumns: "350px 350px 350px 350px" }} >
                {
                    data?.map((product) => {
                        /**Reutilizo mi productCard ya que guarda toda la info que necesito */
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
                }
            </Grid>
        </Container >
    </>);
}

export default CategoryProduct;