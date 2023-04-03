import React, {useState} from "react";

export type RaitingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5 | 6
    defaultValue?:RaitingValueType
    onChange: (value:RaitingValueType) => void
}

export function UnControlledRating(props: RatingPropsType) {

    let [value, setValue]=useState<RaitingValueType>(props.defaultValue ? props.defaultValue :0 )

        return (

            <div>
                <h4>🟢Its incontrolled raiting</h4>
                <Star selected={value > 0} setValue={()=> { setValue(1); props.onChange(1);} }  />
                <Star selected={value > 1} setValue={()=> { setValue(2); props.onChange(2);} } />
                <Star selected={value > 2} setValue={()=> { setValue(3); props.onChange(3);} } />
                <Star selected={value > 3} setValue={()=> { setValue(4); props.onChange(4);} } />
                <Star selected={value > 4} setValue={()=> { setValue(5); props.onChange(5);} } />

            </div>
        );
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {

/*    return props.selected
        ? <span><b>⭐</b></span>
        : <span >★ </span>
    */
    return <span className={'starElement'} onClick={
        ()=> {props.setValue()}}>
        {props.selected
        ? <b>⭐</b>
        : <b>★</b>}
    </span>

}

