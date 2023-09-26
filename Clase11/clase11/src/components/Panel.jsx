import { useState } from "react"

export const Panel = ({ title, children, isActive, onShow }) => {


    return (
        <section>
            {title}
            {
                isActive ? (
                    <p>{children}</p>
                ) : (
                    <button onClick={onShow}>Mostrar</button>
                )
            }
        </section>
    )

}
