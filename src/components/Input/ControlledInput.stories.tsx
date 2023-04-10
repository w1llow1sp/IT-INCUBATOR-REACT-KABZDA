
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









