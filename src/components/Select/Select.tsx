import React from 'react';

export type ItemType ={
    id:string
    title:string}

type SelectPropsType ={
    value:any
    onChange: (value:any)=>void
    items:Array<ItemType>
}

export const Select = (props:SelectPropsType) => {
    return (
        <div>
            <div>{}</div>
            {props.items.map(i=>
                <div key={i.id}>
                    {i.title}
                </div>)}
        </div>
    );
};


