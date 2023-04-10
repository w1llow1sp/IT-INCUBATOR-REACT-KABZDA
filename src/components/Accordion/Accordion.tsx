import React from "react";

export type ItemType ={
    id:string
    title:string}

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
    items:Array<ItemType>
    onClickCallback: () => void

}

export function ControlledAccordion(props: AccordionPropsType) {
    return <div>
        <h4>🔵Its controlled accordion!</h4>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} value={props.value}/>
        {!props.value && <AccordionBody items={props.items} onClickCallback={props.onClickCallback}/>}
    </div>

}

export type AccordionBodyPropsType = {
    items:Array<ItemType>
    onClickCallback: (id:string) => void
}
function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(el =>
            <li onClick={()=>props.onClickCallback(el.id)} key={el.id}>{el.title}</li>)}
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


