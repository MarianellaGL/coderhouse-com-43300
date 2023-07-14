import { Card, CardContent, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

    const cardStyle = {
        height: "350px",
        width: "350px",
        overflow: "hidden",
        margin: "20px",
        alignItems: "center"

    };

    console.log(product)
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={cardStyle}>
                <ImageList sx={{ height: 200 }}>
                    {/**de acá saco mi param del productId*/}
                    <ImageListItem component={Link} to={`/products/${product.id}`}>
                        <img
                            src={product.image}
                            alt={product.title}
                            loading="lazy"
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100px",
                                marginLeft: "50px"
                            }}
                        />
                    </ImageListItem>
                </ImageList>
                <CardContent>
                    <Typography variant="h8" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: {product.price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ProductCard;