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
import {UnControlledInput} from "./components/Input/UnContrtolledInput";
import {Select} from "./components/Select/Select";




function App(props:any) {

    const [raitingControlledValue, setRaitingControlledValue] = useState<RaitingValueType>(1);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [on, setOn] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('sasd-dsds');

    const onClickCallback=()=>{}

    return (
        <div className={'App'}>
            <div className={'controll-wrapper'}>

            <h2>🔇Uncontrolled components🔇</h2>
            <h4>🟢Its uncontrolled Off/On Buttons!</h4>
            <UncontrollOnOff/>
            <UncontrollOnOff/>
            <UncontrollOnOff/>

            <UnControlledRating onChange={()=>{}}/>

            <UnControlledAccordion titleValue={'📜---Users---'} />
            <UnControlledInput/>
            </div>
            <div className={'uncontroll-wrapper'}>
            <h2>🔊Controlled components🔊</h2>

            <h4>🔵Its controlled Off/On Buttons!</h4>

            <ControlledOnOff on={on} setOn={setOn}/>
            <ControlledOnOff on={on} setOn={setOn}/>
            <ControlledOnOff on={on} setOn={setOn}/>

            <ControlledAccordion
                titleValue={'📜---Menu---'}
                value={accordionCollapsed}
                onClick={setAccordionCollapsed}
                items={[
                    {id: 'sasd-dsds', title: 'Im controlled Accordion'},
                    {id: 'sssa-dsdd', title: 'Im controlled Accordion-2'},
                    {id: 'werf-dadd', title: 'Im controlled Accordion-3'}
                ]}
            onClickCallback={onClickCallback}/>
            <ControlledRating
                value={raitingControlledValue}
                onClick={setRaitingControlledValue}/>
                <Select
                    value={selected}
                    onChange={setSelected}
                    items={[
                        {id: 'sasd-dsds', title: 'none'},
                        {id: 'sssa-dsdd', title: 'Minsk'},
                        {id: 'werf-dadd', title: 'Moscow'},
                        {id: 'sass-dsfs', title: 'Kiev'},
                    ]}/>
            </div>
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

