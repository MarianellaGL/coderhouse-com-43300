import Producto from "./Producto";

const TestingMap = () => {
    const nombres = ["Juan", "Pedro", "María", "Ana", "Alberto"]
    const numeros = [1, 2, 3, 4, 5, 6];
    const productos = [
        { id: 1, nombre: "Camiseta", precio: 20 },
        { id: 2, nombre: "Pantalón", precio: 30 },
        { id: 3, nombre: "Zapatos", precio: 50 }
    ];

    const numerosDobles = numeros.map((numero) => numero * 2)
    return (
        <div>
            <ul>
                {nombres.map((nombre, index) => {
                    return <li key={index}>{nombre}</li>
                })}
            </ul>
            <ul>{
                numerosDobles.map((numero, index) => {
                    return <li key={index}>{numero}</li>
                })
            }

            </ul>
            {
                productos.map((producto, index) => {
                    return <Producto key={producto.id} producto={producto} />

                })
            }
        </div>
    );
}

export default TestingMap;