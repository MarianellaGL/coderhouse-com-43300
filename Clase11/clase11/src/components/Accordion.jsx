import { useState } from "react"
import { Panel } from "./Panel"
import { MyContext } from "../context/MyContext"

export const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <>
            <h2> Pais</h2>
            <Panel title="Acerca de" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo soluta odio nesciunt deserunt voluptate obcaecati similique eum magni delectus odit ipsa facilis quia, consequuntur mollitia minus consectetur ipsum et?
            </Panel>

            <Panel title="blah" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis fugiat aspernatur, expedita explicabo quia odio, ut at voluptatem eos beatae deserunt, consequuntur distinctio alias magni aliquid aperiam non molestias doloribus!
            </Panel>
        </>

    )
}