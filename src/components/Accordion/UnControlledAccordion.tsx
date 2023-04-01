import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false);

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={ () => { setCollapsed(!collapsed) } }>Toggle</button>
        {!collapsed && <AccordionBody/>}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}

export default UnControlledAccordion;


