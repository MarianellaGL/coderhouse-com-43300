import { Button } from '@mui/material';


const Dialog = (props) => {
    console.log(props)
    return (props.close && (
        <div className="dialog">
            <h2>{props.title}</h2>
            <div className="dialog-content">
                {props.children}
            </div>
            <Button onClick={props.onClose}>Cerrar</Button>
        </div>
    )
    );
}

export default Dialog;