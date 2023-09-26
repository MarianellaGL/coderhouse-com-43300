import { useContext } from "react"
import { MyContext } from "../context/MyContext"

export const ComponenteA = () => {
    const value = useContext(MyContext);

    //llamo a mi contexto.consumer y consumo el valor  o llamo al useContext
    return (
        <h1>{value}</h1>
    )
}