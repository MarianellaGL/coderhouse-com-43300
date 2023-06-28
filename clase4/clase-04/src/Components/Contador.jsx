import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Contador.css';

const Contador = ({ text }) => {
    const [count, setCount] = useState(0)
    const [confirmButton, setConfirmButton] = useState(false);
    const [error, setError] = useState(false)

    const handleClickValidate = () => {
        if (count <= 0) {
            setError(true)
            return;
        } else {
            setCount(count - 1)
            setError(false)
        }
    }

    return (
        <>
            <div className="container-counter">
                <Button onClick={() => { setCount(count + 1); setError(false) }}>+</Button>
                <span>{count}</span>
                <Button onClick={() => handleClickValidate()}>-</Button>
                <Button variant={confirmButton ? "primary" : "danger"} onClick={() => setConfirmButton((prevState) => !prevState)}>HOLA SOY UN BOTÓN</Button>
                {error && <span style={{ color: "red" }}> NO SE PUEDE DISMINUIR MAS EL NUMERO</span>}
                <h1>{text}</h1>
            </div >

        </>
    );
}

export default Contador;