import React from "react";

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Accordion} from "@mui/material";

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
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <AccordionTitle title={props.titleValue} />
            </AccordionSummary>
            <AccordionDetails>

                {props.items.map(el =>
                    <Typography key={el.id}>
                        {el.title}
                        <hr/>
                    </Typography>)}
            </AccordionDetails>
        </Accordion>
        </div>

}

/*export type AccordionBodyPropsType = {
    items:Array<ItemType>
    onClickCallback: (id:string) => void
}*/
/*function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <AccordionDetails>
            {props.items.map(el =>
            <Typography onClick={()=>props.onClickCallback(el.id)} key={el.id}>{el.title}</Typography>)}
        </AccordionDetails>
    )
}*/

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <Typography>{props.title}</Typography>
    )
}


