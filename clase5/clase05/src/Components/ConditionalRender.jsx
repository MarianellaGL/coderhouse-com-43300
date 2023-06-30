const ConditionalRender = (props) => {
    const isLoggedIn = props.isLoggedIn;
    return (
        <div className="container">
            <h2>renderizado condicional</h2>
            {/** el ternario me va a seleccionar deacuerdo a lo que dice la flag el contenido a renderizar */}
            {
                isLoggedIn ? (
                    <p>Bienvenido, usuario</p>
                ) : (<p>Inicia sesión</p>)
            }
        </div>
    );
}

export default ConditionalRender;