import { AppBar, Toolbar, Typography } from "@mui/material";
import MarketLogo from '../../assets/logo.svg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar sx={{ backgroundColor: "#FF627E", }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <NavLink to="/">
                    <img src={MarketLogo} />
                </NavLink>
                <NavLink to="/" className="navbar-link" activeClassName="active-navbar-link">
                    <Typography>
                        Home
                    </Typography>
                </NavLink>
                <NavLink to="/products" className="navbar-link" activeClassName="active-navbar-link">
                    <Typography>
                        Productos
                    </Typography>
                </NavLink>
                <NavLink to="/categories" className="navbar-link" activeClassName="active-navbar-link">
                    <Typography>
                        Categorias
                    </Typography>
                </NavLink>

                <AddShoppingCartIcon sx={{ width: "41px", height: "40px" }} />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;