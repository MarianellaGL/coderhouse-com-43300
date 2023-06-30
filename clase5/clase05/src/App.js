import { useEffect, useState } from "react";
import "./App.css";
import Dialog from "./Components/Dialog";
import CardComponent from "./Components/CardComponent";
import { Button } from "@mui/material";
import ConditionalRender from "./Components/ConditionalRender";
import Example from "./Components/Example";
import Example2 from "./Components/Example2";
import AutoScrollComponent from "./Components/AutoScrollComponent";

function App() {
  const [close, setClose] = useState(true);
  //** esto es una flag, quiero que sea siempre true hasta que lo cambie */}
  const userLoggedIn = false;

  useEffect(() => {
    console.log("montado");

    return () => {
      console.log("desmontado");
    };
  }, []);

  const handleClose = () => {
    setClose((prev) => !prev);
  };

  return (
    <div className="App">
      {/** componente generico con contenido personalizado*/}
      <Dialog title="Dialogo personalizado" onClose={handleClose} close={close}>
        {/** este es mi children de mi componente */}
        <p>Acá va el contenido personalizado</p>
      </Dialog>
      {/** Patrón de contenido transclusivo */}
      <CardComponent header={<h2>Titulo de la tarjeta</h2>}>
        <p>Contenido de la tarjeta</p>
        <Button>Acción </Button>
      </CardComponent>
      {/** renderizado condicional */}
      <ConditionalRender isLoggedIn={userLoggedIn} />

      {/**Ejemplo de useRef */}
      <Example />

      {/** ejemplo de useEffect */}
      <Example2 />

      {/**ejemplo de useRef con useEffect */}
      <AutoScrollComponent />
    </div>
  );
}

export default App;
