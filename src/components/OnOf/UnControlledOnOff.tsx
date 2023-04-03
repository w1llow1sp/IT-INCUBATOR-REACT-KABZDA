import React, {useState} from 'react';

type PropsType = {
    defaultOn?:boolean
}

export function UncontrollOnOff(props: PropsType) {
    let [on,setOn] = useState(props.defaultOn ? props.defaultOn : false);

    //Стили через обьект:
    const onStyle = {
        width: '50px',
        height: '40px',
        border: '1px solid green',
        borderRadius: '3px',
        margin: '5px',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white' //Тернарное выражение
    };
    const offStyle = {
        width: '50px',
        height: '40px',
        borderRadius: '3px',
        border: '1px solid red',
        margin: '5px',
        padding: '5px',
        backgroundColor: on ? 'white' : 'red', //Тернарное выражение
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    };
//-------------------------------------------------->
    return (
        <div>
            <button onClick={() => { setOn(true)} } style={onStyle}>On</button>
            <button onClick={ () => { setOn(false)} } style={offStyle}>Off</button>
            <div onClick={ () => { setOn(true)} } style={indicatorStyle}></div>
        </div>
    )
}

