import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import useFetch from "../Hooks/UseFetch";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    //exporto mi productId proveniente del  <ImageListItem component={Link} to={`/products/${product.id}`}>
    const { productId } = useParams();

    const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${productId}`)
    if (loading) return <CircularProgress color="secondary" />
    if (error) return <Typography>ups!</Typography>

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Card sx={{ width: "70%", textAlign: "center" }}>

                <img src={data.image} alt={data.title} style={{ width: "30%", height: "auto" }} />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: ${data.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description: {data.description}
                    </Typography>
                </CardContent>
            </Card>
        </div >
    );
}


export default ProductDetail;