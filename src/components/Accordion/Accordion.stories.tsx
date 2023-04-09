
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

const Template: Story<AccordionPropsType> = (args) => <ControlledAccordion {...args}/>;

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {

    titleValue:'Menu ',
    value:true,
    onClick:callback

}


export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    titleValue:'Menu ',
    value:false,
    onClick:callback

}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <ControlledAccordion titleValue={'Im changing'} value={value} onClick={setValue}/>
}
