import { Button, TextField } from "@mui/material";
import { useRef } from "react";

const Example = () => {
    const referenciaDelTextfield = useRef(null);

    const handleClick = () => {
        referenciaDelTextfield.current.focus();
    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TextField inputRef={referenciaDelTextfield} label="input" variant="outlined" />
                <Button variant="contained" color="primary" onClick={handleClick} style={{ width: "10%" }}>
                    Enfocar input
                </Button>
            </div>
        </div>
    );
}

export default Example;