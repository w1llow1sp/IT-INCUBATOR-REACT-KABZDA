import {useState,memo} from "react";

export default {
    title: 'React Memo'
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


export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dima','Valera','Artem','Sonya']);
    const addUser = () => {
        const newUsers = [...users,'Sveta' +  new Date().getTime()]
        setUsers(newUsers)
    }


    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUser}>Add User</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}