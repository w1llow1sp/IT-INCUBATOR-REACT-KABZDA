
import {ControlledOnOff} from "./ControlledOnOff";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Control components/ControlledOnOff story',
    component: ControlledOnOff,
    };

const callback = action('on or off clicked')

export const OnMode = ()=> <ControlledOnOff on={true} setOn={callback}/>
export const OffMode = ()=> <ControlledOnOff on={false} setOn={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <ControlledOnOff on={value} setOn={setValue}/>
}
