
import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default  {
    title:'Control components/Controlled Input',
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox' } checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect= () => {
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


}







