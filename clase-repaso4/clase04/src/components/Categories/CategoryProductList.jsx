import { useParams } from "react-router-dom";

import { CircularProgress, Grid, Typography } from "@mui/material";
import ProductDetail from "../Products/ProductDetail";
import useFirestore from "../../Hooks/useFirestore";


const CategoryProductList = () => {
    const { categoryId } = useParams();
    const { data, loading, error } = useFirestore('categories')

    if (loading) return (<div className='spinner-container'><CircularProgress sx={{ color: "#FF627E" }} /></div>)

    const category = data.filter(category => category.id === parseInt(categoryId))

    if (!category) return (<div className="error-container"><Typography variant="h6" sx={{ color: "#8F8C8C" }}> Categoría no encontrada </Typography></div>)


    return (<>
        <div className="container">
            <Grid container spacing={3}>
                {category.map((category) => {
                    return category.products.map((product) => {
                        return <ProductDetail key={product.id} product={product} />
                    })
                })
                }
            </Grid>

        </div >

    </>);
}

export default CategoryProductList;