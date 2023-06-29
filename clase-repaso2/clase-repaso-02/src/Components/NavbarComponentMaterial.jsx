import { AppBar, Button, Hidden, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import ShoopingCartTwoToneIcon from '@mui/icons-material'

const NavbarComponentMaterial = ({ menuItems }) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow((prev) => !prev)
    }
    return (
        <AppBar>
            <Toolbar>
                <Hidden mdUp>
                    {
                        show && menuItems.map((item, index) => {
                            return <Button key={index} color="inherit" onClick={handleClick}>{item.text}</Button>
                        })
                    }
                    <ShoopingCartTwoToneIcon sx={{ position: 'absolute', right: 0, marginRight: "30px" }} />
                    <Typography sx={{ position: 'absolute', right: 0, marginRight: "10px" }} >(12)</Typography>
                </Hidden>

            </Toolbar>
        </AppBar>
    );
}

export default NavbarComponentMaterial;