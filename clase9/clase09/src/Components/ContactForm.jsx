import { Box, Button, Container, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from "@mui/material";
import "./ContactForm.css";


const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("sended!")
    };

    return (
        <div className="formContainer">
            <Container className="form">
                <Box component="form" onSubmit={handleSubmit} >
                    <Typography variant="h5" align="center" gutterBottom>
                        Formulario de Contacto
                    </Typography>
                    <FormControl color="secondary" className="formValue">
                        <InputLabel htmlFor="name">Nombre</InputLabel>
                        <Input id="name" />
                    </FormControl>
                    <FormControl color="secondary" className="formValue">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" aria-describedby="email" />
                        <FormHelperText id="helper-mail">Nunca compartiremos tu email.</FormHelperText>
                    </FormControl>
                    <FormControl className="formValue">
                        <TextField
                            label="Mensaje"
                            variant="outlined"
                            color="secondary"
                            multiline
                            rows={4}
                            required
                        />
                    </FormControl>
                    <div className="button-container">
                        <Button className="button" type="submit" variant="contained" color="secondary">
                            Enviar
                        </Button>
                    </div>
                </Box>

            </Container>
        </div >
    );
};

export default ContactForm;
