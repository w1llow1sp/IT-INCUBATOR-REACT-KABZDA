import {useState, memo, useCallback, useMemo, useEffect} from "react";

export default {
    title: 'React/useEffect demo'
}



export const Example1 = () => {
    //api.getUser().then('')
    //setIntercal
    //indexedDB
    // document.getElementId()
    // document.title = 'User'


    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log(' Simple example')

    useEffect(() => {
        console.log('useEffect every render ')
        document.title = counter.toString()

    },)

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    },[])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    },[counter])

    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={() => setFake(fake+1)}>+</button>
            {counter}
        </>
    );
}
export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);
    console.log(' SetTimeoutExample example')



    useEffect(() => {
        setInterval(()=>{
            setCounter((state)=>state+1)
        },1000)

    },[])

    return (
        <>
            Hello, counter: {counter} - fake : {fake}
{/*            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={() => setFake(fake+1)}>+</button>*/}

        </>
    );
}
export const ClockExample = () => {
    const [time, setTime] = useState({
        hours:new Date().getHours(),
        min:new Date().getMinutes(),
        sec:new Date().getSeconds()
    });


    useEffect(() => {

        const interval = setInterval(()=>{
            setTime({
                hours:new Date().getHours(),
                min:new Date().getMinutes(),
                sec:new Date().getSeconds()
            })
        },1000)

        return () => {
            clearInterval(interval)
        }


    },[])

    return (
        <>
            Hello, right now
            <br/>
            <b>{time.hours} : {time.min} : {time.sec}</b>
        </>
    );
}







