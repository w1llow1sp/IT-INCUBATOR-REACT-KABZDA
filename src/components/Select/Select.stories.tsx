import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Control components/Controlled Select story',
    component: Select
};


export const BaseExample = () => {
const [value, setValue] = useState('sasd-dsds');
return (
    <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {id: 'sasd-dsds', title: 'none'},
                {id: 'sssa-dsdd', title: 'Minsk'},
                {id: 'werf-dadd', title: 'Moscow'},
                {id: 'sass-dsfs', title: 'Kiev'},
            ]}/>
    </>
)
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    return (
        <>
            <Select
                value={value}
                onChange={setValue}
                items={[
                    {id: 'sasd-dsds', title: 'none'},
                    {id: 'sssa-dsdd', title: 'Minsk'},
                    {id: 'werf-dadd', title: 'Moscow'},
                    {id: 'sass-dsfs', title: 'Kiev'},
                ]}/>
        </>
    )

}


/*
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>(undefined);

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>

*/

