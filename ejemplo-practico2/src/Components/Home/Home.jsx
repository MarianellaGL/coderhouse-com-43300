import { Card, CardContent, Typography } from "@mui/material";
import visa from "../../assets/visa.svg"
import master from '../../assets/master.svg'
import amex from '../../assets/amex.svg'
import galicia from '../../assets/galicia.svg'

const Home = (props) => {
    console.log(props)

    return (<>
        <div className="container">
            <Typography variant="h2" sx={{ color: "#8F8C8C", fontWeight: "lighter" }}>¡Aprovecha nuestros descuentos!</Typography>
            <div className="container-card">
                <Card sx={{ width: "846px", height: "240px", textAlign: "center", fontWeight: "lighter" }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ color: "#8F8C8C" }}>¡Promociones con tarjeta hasta tres cuotas sin interés!</Typography>
                        <img src={visa} alt="visa" />
                        <img src={master} alt="master" />
                        <img src={amex} alt="amex" />
                    </CardContent>
                </Card>
            </div>
            <div className="container-card">
                <Card sx={{ width: "846px", height: "240px", textAlign: "center", fontWeight: "lighter" }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ color: "#8F8C8C" }}>¡Promociones con Galicia hasta 35% de descuento!</Typography>
                        <img src={galicia} alt="visa" />
                    </CardContent>
                </Card>
            </div>
        </div>
    </>);
}

export default Home;