import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import useFetch from "../Hooks/UseFetch";
import CategoryCard from "./CategoryCard";

const Categories = () => {

    const { data, loading, error } = useFetch("https://fakestoreapi.com/products/categories")

    if (loading) return <CircularProgress />
    if (error) return <Typography>Ups!</Typography>


    return (<>
        <Container sx={{ display: "flex", justifyContent: "space-around" }}>
            <Grid sx={{ display: "grid", top: "30%", position: "absolute", gridTemplateColumns: "350px 350px" }} >
                {data?.map((category, index) => {
                    return <CategoryCard key={index} category={category} />
                })}
            </Grid>
        </Container >
    </>);
}

export default Categories;