import React from "react";

export type AccordionPropsType = {
    /**
     *
     */
    titleValue: string
    value: boolean
    /**
     * Callback that is called then any item is clicked
     * @param  value is value of clicked item
     */
    onClick:(collapsed:boolean)=>void
}

export function ControlledAccordion(props: AccordionPropsType) {
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


