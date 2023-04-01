import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

function UnControlledRating(props: RatingPropsType) {

    let [value, setValue]=useState(0)

        return (

            <div>
                <h1>------Uncontroled raiting---------</h1>
                <Star selected={value > 0} />
                <button onClick={ () => {setValue(1)} }>1 </button>
                <Star selected={value > 1}/>
                <button onClick={ () => {setValue(2)} }>2</button>
                <Star selected={value > 2}/>
                <button onClick={ () => {setValue(3)} }>3</button>
                <Star selected={value > 3}/>
                <button onClick={ () => {setValue(4)} }>4</button>
                <Star selected={value > 4}/>
                <button onClick={ () => {setValue(5)} }>5</button>
                <Star selected={value > 5}/>
            </div>
        );
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    const starStyle = {
        fontSize: '18px',
    }

    if (props.selected === true) {
        return <span style={starStyle}><b>⭐ </b></span>
    } else {
        return (
            <span style={starStyle}>★ </span>
        )
    }
}

export default  UnControlledRating;