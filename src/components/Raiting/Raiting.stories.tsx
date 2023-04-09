
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {RaitingValueType, ControlledRating} from "./ControlledRaiting";
import {useState} from "react";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Control components/ControlledRating story',
    component: ControlledRating,
    };

const callback = action('ControlledRating mode off or on')

export const EmptyStars = () => <ControlledRating value={0} onClick={callback}/>
export const Rating1 = () => <ControlledRating value={1} onClick={callback}/>
export const Rating2 = () => <ControlledRating value={2} onClick={callback}/>
export const Rating3 = () => <ControlledRating value={3} onClick={callback}/>
export const Rating4 = () => <ControlledRating value={4} onClick={callback}/>
export const Rating5 = () => <ControlledRating value={5} onClick={callback}/>
export const ChangeRaiting = () => {
    const [raiting, setRaiting] = useState<RaitingValueType>(3);
    return <ControlledRating value={raiting} onClick={setRaiting}/>


}
