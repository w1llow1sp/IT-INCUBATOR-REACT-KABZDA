import React, {useState} from 'react';
import './App.css';
import { RaitingValueType, Rating} from "./components/Raiting/Raiting";
import OnOff from "./components/OnOf/OnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";
import {Accordion} from "./components/Accordion/Accordion";
import UnControlledRating from "./components/Raiting/UnControlledRaiting";
import ControlledOnOff from "./components/OnOf/UnControlledOnOff";

function App(props:any) {

    const [raitingControlledValue, setRaitingControlledValue] = useState<RaitingValueType>(1);

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);

    const [on, setOn] = useState<boolean>(false);

    return (
        <div className={'App'}>

            <h2>🔇Uncontrolled components🔇</h2>
            <h4>🟢Its controlled Off/On Buttons!</h4>

            <ControlledOnOff on={on} setOn={setOn}/>
            <ControlledOnOff on={on} setOn={setOn}/>
            <ControlledOnOff on={on} setOn={setOn}/>
            <UnControlledRating />
            <UnControlledAccordion titleValue={'---Users---'} />

            <h2>🔊Controlled components🔊</h2>
            <h4>🔵Its incontrolled Off/On Buttons!</h4>

            <OnOff />
            <OnOff />
            <OnOff />

            <Accordion
                titleValue={'---Menu---'}
                value={accordionCollapsed}
                onClick={setAccordionCollapsed} />
            <Rating
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

