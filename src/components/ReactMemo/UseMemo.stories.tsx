import {memo, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(3);
    const [b, setB] = useState(3);


    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(() => {
        let tempResult =1
         for (let i=1;i<=a;i++){
             let fake =0
             while (fake < 100000) {
                 fake++
                 const fakeValue = Math.random()
             }
             tempResult = tempResult * i


         }
        return tempResult
    }, [a]);


    for (let i=1;i<=b;i++){
        resultB = resultB * i
    }


    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>

            <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>

        </>)
}

export const HelpsForReactMemoExample = () => {
    const [a, setA] = useState(3);
    const [b, setB] = useState(3);


    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(() => {
        let tempResult =1
        for (let i=1;i<=a;i++){
            let fake =0
            while (fake < 100000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult = tempResult * i


        }
        return tempResult
    }, [a]);


    for (let i=1;i<=b;i++){
        resultB = resultB * i
    }


    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>

            <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>

        </>)
}

const NewMessageCounter = (props:{count:number}) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props:{users:Array<string>}) => {
    return <div>{
        props.users.map((u,i)=><div key={i}>{u}</div>)
    }</div>
}

const Users = memo(UsersSecret)


export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dima', 'Valera', 'Artem', 'Sonya']);

    const newArray = useMemo(() => {
        const newArray = users.filter(user => user.toLowerCase().indexOf('a') >-1)
        return newArray
    }, [users]);

    const addUser = () => {
        const newUsers = [...users,'Sveta' +  new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUser}>Add User</button>
        {counter}
        <Users users={newArray}/>
    </>
}