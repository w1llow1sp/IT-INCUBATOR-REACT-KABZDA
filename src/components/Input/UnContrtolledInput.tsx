import React, {ChangeEvent, useRef, useState} from 'react';

export const UnControlledInput = () => {
    const [value, setValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    //
    const save = () => {
        const el= inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    //
    const [value2, setValue2] = useState('');
    const onChangeHandle = (e:ChangeEvent<HTMLInputElement>) => {
        const actionValue = e.currentTarget.value
        setValue2(actionValue)}

    return (
        <div>
            <h4>Its Uncontrolled Inputs</h4>
            <div>
                <h5>🟢Uncontrolled Input with Ref</h5>
                <input ref={inputRef} id={'inputID'}/>
                <button onClick={save}>S A V E</button>
                action value : {value}
            </div>

            <div>
                <h5>🟢Uncontrolled Input with onChange()</h5>
                <input onChange={onChangeHandle}/> - {value}
            </div>

        </div>
    );
};

