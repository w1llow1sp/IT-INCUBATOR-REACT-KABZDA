import React, {useState} from 'react';
import './App.css';

//import uncontrolled components
import {UncontrollOnOff} from "./components/OnOf/UnControlledOnOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Raiting/UnControlledRaiting";

//import controlled components
import {ControlledOnOff} from "./components/OnOf/ControlledOnOff";
import {ControlledAccordion} from "./components/Accordion/Accordion";
import {ControlledRating, RaitingValueType} from "./components/Raiting/ControlledRaiting";


function App(props:any) {

    const [raitingControlledValue, setRaitingControlledValue] = useState<RaitingValueType>(1);

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);

    const [on, setOn] = useState<boolean>(false);

    return (
        <div className={'App'}>

            <h2>🔇Uncontrolled components🔇</h2>
            <h4>🟢Its uncontrolled Off/On Buttons!</h4>
            <UncontrollOnOff/>
            <UncontrollOnOff/>
            <UncontrollOnOff/>

            <UnControlledRating />

            <UnControlledAccordion titleValue={'📜---Users---'} />

            <h2>🔊Controlled components🔊</h2>

            <h4>🔵Its controlled Off/On Buttons!</h4>

            <ControlledOnOff on={on} setOn={setOn}/>
            <ControlledOnOff on={on} setOn={setOn}/>
            <ControlledOnOff on={on} setOn={setOn}/>

            <ControlledAccordion
                titleValue={'📜---Menu---'}
                value={accordionCollapsed}
                onClick={setAccordionCollapsed} />
            <ControlledRating
                value={raitingControlledValue}
                onClick={setRaitingControlledValue}/>

        </div>
    );
}


type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return (
        <div>
        <h1>{props.title}</h1>
        </div>
    )
}


export default App;

