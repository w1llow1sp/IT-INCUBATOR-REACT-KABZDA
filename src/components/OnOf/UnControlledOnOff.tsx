import React from 'react';


type PropsType = {
    on: boolean
    setOn : (on:boolean) => void
}

function ControlledOnOff(props:PropsType) {

    //Стили через обьект:
    const onStyle = {
        width: '50px',
        height: '40px',
        border: '1px solid green',
        borderRadius: '3px',
        margin: '5px',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'white' //Тернарное выражение
    };
    const offStyle = {
        width: '50px',
        height: '40px',
        borderRadius: '3px',
        border: '1px solid red',
        margin: '5px',
        padding: '5px',
        backgroundColor: props.on ? 'white' : 'red', //Тернарное выражение
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    };
//-------------------------------------------------->
    return (
        <div>
            <button onClick={()=>props.setOn(true)} style={onStyle}>On</button>
            <button onClick={ () =>props.setOn(false)} style={offStyle}>Off</button>
            <div  style={indicatorStyle}></div>
        </div>
    )
}


export default ControlledOnOff;