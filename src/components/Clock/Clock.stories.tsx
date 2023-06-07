
import {action} from "@storybook/addon-actions";
import {useState} from "react";
import {ArrowClock, Clock} from './Clock';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Clock',
    component: Clock,ArrowClock
};

export const BaseExample = () => {
    return (
        <>
            <Clock/>
        </>
    )
}
export const ArrowExample = () => {
    return (
        <>
            <ArrowClock/>
        </>
    )
}