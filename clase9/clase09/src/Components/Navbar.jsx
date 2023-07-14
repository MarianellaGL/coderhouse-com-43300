import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='secondary'>
                <Toolbar>
                    <Typography variant='h6' style={{ marginRight: "20px" }}> La MEGA tienda</Typography>
                    <NavLink className="inactive" activeClassName="active" to="/">
                        Productos
                    </NavLink>
                    <NavLink className="inactive" activeClassName="active" to="/categories">
                        Categorias

                    </NavLink>
                    <NavLink className="inactive" activeClassName="active" to="/contact" >
                        Formulario de Contacto
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
}