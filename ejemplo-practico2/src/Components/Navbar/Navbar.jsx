import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MarketLogo from '../../assets/logo.svg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ThemeContext } from "../../Context/ThemeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const { darkTheme, setDarkTheme } = useContext(ThemeContext)

    console.log(cart)

    return (
        <AppBar sx={{ backgroundColor: darkTheme ? "#33082E" : "#FF627E" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton onClick={() => setDarkTheme((prev) => !prev)}>{darkTheme ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
                <NavLink className="navbar-link" activeClassName="active-navbar-link" to="/">
                    <img src={MarketLogo} />
                </NavLink>
                <NavLink className="navbar-link" activeClassName="active-navbar-link" to="/">
                    <Typography >
                        Home
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" activeClassName="active-navbar-link" to="/products">
                    <Typography >
                        Productos
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" activeClassName="active-navbar-link" to="/categories">
                    <Typography >
                        Categorías
                    </Typography>
                </NavLink>
                <div style={{ display: "flex" }}>
                    <AddShoppingCartIcon sx={{ width: "41px", height: "40px", margin: "0" }} /><Typography component={NavLink} to="/cart" >{cart.items.length}</Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;