import ItemList from "./ItemList";
import Navbar from "./Navbar";

const Container = () => {

    const msj = "Esto es una prueba"
    return (
        <div className="container mx-auto">
            <Navbar />
            <ItemList msj={msj} />
        </div>
    );
}

export default Container;