import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import PaymentIcon from "@mui/icons-material/Payment";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ProductInfo from "./ProductInfo";

const ProductDetail = ({ product, children }) => {
    const { id, title, image, price, itHasDues, isAnOffer } = product;
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected((prev) => !prev)
    }


    return (<>
        <Grid key={product.id} item sx={12} sm={6} md={4} lg={3}>
            <Card className="card-products-container" onClick={handleClick}>
                <img className="card-media"
                    src={image} />
                <CardContent>
                    <Typography>{title}</Typography>
                    <Typography>{price.toFixed(2)}</Typography>
                    {
                        itHasDues && (
                            <Typography variant="body2" color="textSecondary">
                                <PaymentIcon /> Hasta tres cuotas sin interés!
                            </Typography>
                        )
                    }
                    {
                        isAnOffer && (
                            <Typography variant="body2" color="textSecondary">
                                <LocalOfferIcon /> 35% de descuento con Galicia!
                            </Typography>
                        )
                    }
                    {children}

                </CardContent>
            </Card>
            {
                isSelected && <ProductInfo open={isSelected} setOpen={setIsSelected}>
                    {children}
                </ProductInfo>
            }
        </Grid>
    </>);
}

ProductDetail.propTypes = {
    children: PropTypes.func.isRequired,
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        itHasDues: PropTypes.bool.isRequired,
        isAnOffer: PropTypes.bool.isRequired,
    })
}
export default ProductDetail;