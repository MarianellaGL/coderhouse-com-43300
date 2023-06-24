import React from "react";

const Componente = (props) => {
    const { array } = props;

    const clickbutton = () => {
        console.log("click");
    };

    return (
        <>
            <h1 className="hola">Hola desde mi componente</h1>
            <p style={{ paddingBottom: "10px" }}>
                {array.find((item) => item === 2)}
            </p>
            <button onClick={() => clickbutton()}></button>
        </>
    );
};

export default Componente;