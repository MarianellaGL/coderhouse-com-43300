import React, { useEffect, useRef } from "react";

const AutoScrollComponent = () => {
    const messagesRef = useRef(null); // Creamos una referencia llamada messagesRef

    useEffect(() => {
        // Simulación de nuevos mensajes llegando cada 2 segundos
        const interval = setInterval(() => {
            const newMessage = document.createElement("div"); // Creamos un nuevo elemento <div> para representar el mensaje
            newMessage.textContent = "Nuevo mensaje"; // Asignamos el texto "Nuevo mensaje" al elemento
            messagesRef.current.appendChild(newMessage); // Añadimos el elemento al contenedor de mensajes
        }, 2000);

        return () => clearInterval(interval); // Limpiamos el intervalo cuando el componente se desmonta porque sino se sigue ejecutando y nos ocupa espacio en memoria
        //si bien en este ejemplo hacemos el return para la limpieza, no siempre es necesario retornar un valor en el useEffect, solo en casos especificos
    }, []);

    return (
        <div>
            <div ref={messagesRef} className="message-container"></div>{" "}
            {/* Asignamos la referencia messagesRef al contenedor de mensajes */}
        </div>
    );
};

export default AutoScrollComponent;