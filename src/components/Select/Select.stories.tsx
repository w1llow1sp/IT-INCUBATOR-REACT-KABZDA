import {ChangeEvent, useState} from "react";

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