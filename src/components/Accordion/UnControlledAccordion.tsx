import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


export function UnControlledAccordion(props: AccordionPropsType) {

    const [state, dispatch] = useReducer(reducer, {collapsed:false})
    const MemoizedAccordionTitle = React.memo(AccordionTitle);


    return <div>
        <h4>🟢Its incontrolled accordion!</h4>
        <MemoizedAccordionTitle title={props.titleValue} onClick={()=>{dispatch({type:TOGGLE_COLLAPSED})}}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.onClick()}}>--{props.title}--</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>Im uncontrolled accordion element!</li>
            <li>Im uncontrolled accordion element!</li>
            <li>Im uncontrolled accordion element!</li>
        </ul>
    )
}



