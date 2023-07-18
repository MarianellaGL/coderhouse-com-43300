import { useParams } from "react-router-dom";
import categories from '../../mocks/categories.json'
import useMockData from "../../Hooks/useMockData";
import { CircularProgress, Grid, Typography } from "@mui/material";
import ProductDetail from "../Products/ProductDetail";

const CategoryProductList = () => {
    const { categoryId } = useParams();
    const { data, loading } = useMockData(categories);

    if (loading) return (<div className='spinner-container'><CircularProgress sx={{ color: "#FF627E" }} /></div>)

    const category = data.filter(category => category.id === parseInt(categoryId))

    console.log('hopla', category)

    if (!category) return (<div className="error-container"><Typography variant="h6" sx={{ color: "#8F8C8C" }}> Categoría no encontrada </Typography></div>)


    return (<>
        <div className="container">
            <Grid container spacing={3}>
                {category.map((category) => {
                    console.log(category)
                    return category.products.map((product) => {
                        console.log('product', product)
                        return <ProductDetail key={product.id} product={product} />
                    })
                })
                }
            </Grid>

        </div>

    </>);
}

export default CategoryProductList;