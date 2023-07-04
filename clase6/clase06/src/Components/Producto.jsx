const Producto = ({ producto }) => {



    return (
        <div>
            <h3>{producto.nombre}</h3>
            <p> Precio: ${producto.precio}</p>
        </div>
    );
}

export default Producto;