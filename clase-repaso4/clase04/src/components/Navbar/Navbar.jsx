import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MarketLogo from '../../assets/logo.svg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = ({ active, setActive }) => {
    const { cart } = useContext(CartContext)
    const { darkTheme, setDarkTheme } = useContext(ThemeContext)
    const [activeHome, setActiveHome] = useState(false);



    console.log(cart)
    return (
        <AppBar sx={{ backgroundColor: darkTheme ? "#FF627E" : "#33082E" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton onClick={() => setDarkTheme((prev) => !prev)}>{darkTheme ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
                <NavLink to="/" onClick={() => setActiveHome(true)}>
                    <img src={MarketLogo} />
                </NavLink>
                <NavLink to="/" className={({ isActive }) => isActive ? "active-navbar-link" : "navbar-link"} >
                    <Typography>
                        Home
                    </Typography>
                </NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? "active-navbar-link" : "navbar-link"}>
                    <Typography>
                        Productos
                    </Typography>
                </NavLink>
                <NavLink to="/categories" className={({ isActive }) => isActive ? "active-navbar-link" : "navbar-link"}>
                    <Typography>
                        Categorias
                    </Typography>
                </NavLink>
                <div style={{ display: "flex" }}>
                    <AddShoppingCartIcon sx={{ width: "41px", height: "40px" }} />{cart.length}

                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;