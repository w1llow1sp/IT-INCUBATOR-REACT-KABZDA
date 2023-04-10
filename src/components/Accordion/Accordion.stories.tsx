
import {AccordionPropsType, ControlledAccordion} from './Accordion'
import {action} from "@storybook/addon-actions";
import {useState} from "react";
import {Story} from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Control components/Controlled Accordion',
    component: ControlledAccordion,
    };
const callback = action('accordion mode off or on')
const OnClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <ControlledAccordion {...args}/>;

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    titleValue:'Menu ',
    value:true,
    onClick:callback,
    items: [
        {id: 'sasd-dsds', title: 'Im controlled Accordion'},
        {id: 'sssa-dsdd', title: 'Im controlled Accordion-2'},
        {id: 'werf-dadd', title: 'Im controlled Accordion-3'}
    ],
    onClickCallback:OnClickCallback

}


export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    titleValue:'Menu ',
    value:false,
    onClick:callback,
    items: [
        {id: 'sasd-dsds', title: 'Im controlled Accordion'},
        {id: 'sssa-dsdd', title: 'Im controlled Accordion-2'},
        {id: 'werf-dadd', title: 'Im controlled Accordion-3'}
    ],
    onClickCallback:OnClickCallback

}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <ControlledAccordion
        titleValue={'Im changing'}
        value={value}
        onClick={()=>setValue(!value)}
        items={[
            {id: 'sasd-dsds', title: 'Im controlled Accordion'},
            {id: 'sssa-dsdd', title: 'Im controlled Accordion-2'},
            {id: 'werf-dadd', title: 'Im controlled Accordion-3'}
        ]}
    onClickCallback = {() => {alert(`user with id  should be happy`)}}/>
}
