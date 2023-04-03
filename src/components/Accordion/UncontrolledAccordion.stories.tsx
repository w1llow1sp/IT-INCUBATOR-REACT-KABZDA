import {UnControlledAccordion} from "./UnControlledAccordion";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UnControlledAccordion Accordion',
    component: UnControlledAccordion,
    };

const callback = action('accordion mode off or on')

export const ModeChanging = () => {
    return <UnControlledAccordion titleValue={'Im changing'}/>
}
