import React, {useEffect, useState} from 'react'
import './Clock.css'
type PropsType = {

}


const get2digitsString = (num:number) => num <10 ? '0'+ num : num

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {


       const intervalID = setInterval(() => {
            setDate(new Date())
        },1000)

        return ()=>{
            clearInterval(intervalID)
        }
    }, []);


    const secondsString = get2digitsString(date.getSeconds())

    const minutesString = get2digitsString(date.getMinutes())

    const hoursString = get2digitsString(date.getHours())


    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>

        </div>
    )
}


export type dateType = {
    secondRation:number
    minutesRation:number
    hourRation:number
}
export const ArrowClock = () => {
    const [date, setDate] = useState<dateType>({
        secondRation:0,
        minutesRation:0,
        hourRation:0,

    });
    let setClock = () => {
        const currentDate = new Date()
        let secondRationClock = currentDate.getSeconds() / 60
        let minutesRationClock = (secondRationClock + currentDate.getMinutes()) / 60
        let hourRationClock = (minutesRationClock + currentDate.getHours()) / 12

        setDate({...date,secondRation:secondRationClock,minutesRation:minutesRationClock,hourRation:hourRationClock})

    }


    useEffect(() => {
        const intervalID2 = setInterval(() => {
            setClock()
        },1000)

        return ()=>{
            clearInterval(intervalID2)
        }
    }, []);


    return (
        <div className="clock">
            <div className="hand hour" style={{transform: `translate(-50%) rotate(${date.hourRation * 360}deg)`}}></div>
            <div className="hand minute"style={{transform: `translate(-50%) rotate(${date.minutesRation * 360}deg)`}}  ></div>
            <div className="hand second"style={{transform: `translate(-50%) rotate(${date.secondRation * 360}deg)`}}  ></div>

            <div className="number number1"><div>1</div></div>
            <div className="number number2"><div>2</div></div>
            <div className="number number3"><div>3</div></div>
            <div className="number number4"><div>4</div></div>
            <div className="number number5"><div>5</div></div>
            <div className="number number6"><div>6</div></div>
            <div className="number number7"><div>7</div></div>
            <div className="number number8"><div>8</div></div>
            <div className="number number9"><div>9</div></div>
            <div className="number number10"><div>10</div></div>
            <div className="number number11"><div>11</div></div>
            <div className="number number12"><div>12</div></div>
        </div>
    )
}