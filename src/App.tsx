import React from 'react';
import './App.css';
import {Rating} from "./components/Raiting/Raiting";
import OnOff from "./components/OnOf/OnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";
import {Accordion} from "./components/Accordion/Accordion";
import UnControlledRating from "./components/Raiting/UnControlledRaiting";

function App() {
    return (
        <div className={'App'}>
            <OnOff />
            <OnOff />
            <OnOff />

            <Accordion titleValue={'---Menu---'} collapsed={false} />
            <UnControlledAccordion titleValue={'---Users---'} />

            <UnControlledRating />
            <Rating value={0}/>

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

