
import {ChangeEvent, useRef, useState} from "react";

export default  {
    title:'Uncontrol components/Uncontrolled Input',
}

export const UncontrolledInputDefault = () => <input/>
export const GetUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el= inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef} id={'inputID'}/>
            <button onClick={save}>S A V E</button>
            action value : {value}
        </>
    )

}
export const UncontrolledInputWithTrackValue = () => {
    const [value, setValue] = useState('');
    const onChangeHandle = (e:ChangeEvent<HTMLInputElement>) => {
        const actionValue = e.currentTarget.value
        setValue(actionValue)
    }
    return (
        <>
            <input onChange={onChangeHandle}/> - {value}</>
        )

}



