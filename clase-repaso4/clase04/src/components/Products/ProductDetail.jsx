import { Card, CardContent, Grid, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import PropTypes from 'prop-types'

const ProductDetail = ({ product }) => {
    const { id, image, title, price, itHasDues, isAnOffer } = product;

    return (<Grid item sx={12} sm={6} md={4} lg={3}>
        <Card className="card-products-container">
            <img className="card-media"
                src={image} />
            <CardContent>
                <Typography>{title}</Typography>
                <Typography>{price.toFixed(2)}</Typography>
                {
                    itHasDues && (
                        <Typography>
                            <PaymentIcon /> Hasta tres cuotas sin interés!
                        </Typography>
                    )
                }
            </CardContent>
        </Card>

    </Grid>);
}

ProductDetail.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        itHasDues: PropTypes.bool.isRequired,
        isAnOffer: PropTypes.bool.isRequired,
    }).isRequired

}

export default ProductDetail;