import React from "react";

type AccordionPropsType = {
    titleValue: string
    value: boolean
    onClick:(collapsed:boolean)=>void
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <h4>🔵Its controlled accordion!</h4>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} value={props.value}/>
        {!props.value && <AccordionBody/>}
    </div>

}

function AccordionBody() {
    return (
        <ul>
            <li>I controlled accodion</li>
            <li>I controlled accodion</li>
            <li>I controlled accodion</li>
        </ul>
    )
}

type AccordionTitlePropsType = {
    title: string
    value: boolean
    onClick:(collapsed:boolean)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>props.onClick(!props.value)}>{props.title}</h3>
    )
}


