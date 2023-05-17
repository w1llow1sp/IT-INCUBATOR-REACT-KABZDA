import {useState, memo, useCallback, useMemo} from "react";

export default {
    title: 'React Memo'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = memo(UsersSecret)


export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['Dima', 'Valera', 'Artem', 'Sonya']);


    const addBook = () => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }
}

    export const LikeUseCallback = () => {
        console.log('Like Use Callback');

        const [counter, setCounter] = useState(0);
        const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);

        const addBook =() => {
            const newBooks = [...books, 'Angular' + new Date().getTime()];
            setBooks(newBooks);
        };


        const memoizedAddBook = useMemo(() => {
            return  ()=> {
                const newBooks = [...books, 'Angular' + new Date().getTime()];
                setBooks(newBooks);
            }},
            [books]);

        const memoizedAddBook2 = useCallback(()=> {
                    const newBooks = [...books, 'Angular' + new Date().getTime()];
                    setBooks(newBooks);
                },
            [books]);


        return (
            <>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                {counter}
                <Book addBook={memoizedAddBook2}/>
            </>
        );
    };

    type BookSecretPropsType = {
        addBook: () => void;
    };

    const BookSecret = (props: BookSecretPropsType) => {
        return (
            <div>
                <button onClick={() => props.addBook()}>add Book</button>
            </div>
        );
    };

    const Book = memo(BookSecret);