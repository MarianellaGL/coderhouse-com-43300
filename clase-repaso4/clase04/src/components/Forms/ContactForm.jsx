import { Button } from "@mui/material";
import InputForm from "./InputForm";
import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const submitForm = (evt) => {
        evt.preventDefault();
        console.log(evt)
    }

    const handleNameChange = (e) => {
        console.log('name', e.target.value)
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        console.log('email', e.target.value)
        setEmail(e.target.value)
    }



    return (
        <form onSubmit={submitForm} style={{ display: "flex", justifyContent: "center", margin: "40vh" }}>
            <InputForm nombreDelLabel="Nombre" onHandleData={handleNameChange} />
            <InputForm nombreDelLabel={"Email"} onHandleData={handleEmailChange} />
            <Button type="submit">Enviar</Button>
        </form>
    );
}

export default ContactForm;