
import {ControlledAccordion} from './Accordion'
import {action} from "@storybook/addon-actions";
import {useState} from "react";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Controlled Accordion',
    component: ControlledAccordion,
    };

const callback = action('accordion mode off or on')

export const CollapsedMode = ()=> <ControlledAccordion titleValue={'Menu '} value={true} onClick={callback}/>
export const UncollapsedMode = ()=> <ControlledAccordion titleValue={'Menu '} value={false} onClick={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <ControlledAccordion titleValue={'Im changing'} value={value} onClick={setValue}/>
}
