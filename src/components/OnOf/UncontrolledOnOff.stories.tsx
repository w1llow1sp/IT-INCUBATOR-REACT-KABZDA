import {UncontrollOnOff} from "./UnControlledOnOff";
import {action} from "@storybook/addon-actions";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Uncontrol components/UncontrollOnOff story',
    component: UncontrollOnOff,
    };

const callback = action('on or off clicked')

export const OnMode = () => <UncontrollOnOff  defaultOn={true}/>
export const OffMode = () => <UncontrollOnOff defaultOn={false}/>

export const ModeChanging = () => {
    return <UncontrollOnOff />
}
