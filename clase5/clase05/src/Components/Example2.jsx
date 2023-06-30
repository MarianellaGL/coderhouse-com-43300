import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Example2 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Contador: ${count}`
        console.log(' componente montado')

        return () => {
            console.log('componente demontado')
        }

    }, [count])

    const handleClick = () => {
        setCount(count + 1)
    }
    return (<div>
        <Typography variant="h4">Contador: {count}</Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>
            Incrementar
        </Button>
    </div>);
}

export default Example2;