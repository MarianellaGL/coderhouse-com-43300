const CardComponent = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                {props.header}
            </div>
            <div className="card-content">{props.children}</div>
        </div>
    );
}

export default CardComponent;