import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function UnControlledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false);

    return <div>
        <h4>🟢Its incontrolled accordion!</h4>
        <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
        {!collapsed && <AccordionBody/>}
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

export default UnControlledAccordion;


