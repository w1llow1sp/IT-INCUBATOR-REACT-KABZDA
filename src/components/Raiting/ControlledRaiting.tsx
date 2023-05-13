import React from "react";
import {ControlledAccordion} from "../Accordion/Accordion";

 export type RaitingValueType = 0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType = {
    value: RaitingValueType
    onClick:(value:RaitingValueType) => void
}

export const ControlledRating = React.memo((props: RatingPropsType) =>{
        return (
            <div>
                <h4>🔵Its controlled raiting!</h4>
                <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
                <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
                <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
                <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
                <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
            </div>
        );
})

type StarPropsType = {
    selected: boolean
    onClick: (value:RaitingValueType) => void
    value: RaitingValueType
}

export const  Star = React.memo((props: StarPropsType) => {
    return <span className={'starElement'} onClick={()=>{props.onClick(props.value)}}>
        {props.selected
            ? <b>⭐</b>
            : <b>★</b>
        }
    </span>
})