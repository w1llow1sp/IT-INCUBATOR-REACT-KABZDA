import React, {ChangeEvent, useRef, useState} from 'react';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';


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
                <TextField size='small' label="input Value" variant="outlined" inputRef={inputRef} id={'inputID'}/>
                <br/>
                <Button variant="contained" onClick={()=>save()}>Save</Button>
                <br/>
                <br/>
                <i><b>Action value:</b></i>  {value}
            </div>

            <div>
                <h5>🟢Uncontrolled Input with onChange()</h5>
                <TextField size='small' label="input Value" variant="outlined" onChange={onChangeHandle}/>
                <br/>
                <br/>
               <i><b>Value:</b></i> {value2}
            </div>

        </div>
    );
};

