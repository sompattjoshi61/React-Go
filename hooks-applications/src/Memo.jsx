import React, { useMemo, useState } from 'react'

function Memo(props) {
    const [CounterOne, setCounterOne] = useState(0)
    const [CounterTwo, setCounterTwo] = useState(0)
    const incrementOne = () => {
        setCounterOne(CounterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(CounterTwo + 1)
    }


    // const isEven = () => {
    //     let i =0
    //     while(i<1000000000){
    //         i++
    //     }
    //     return CounterOne % 2 === 0
    // }

    // if we click counter 2 button after pressing counter 1 we will see that counter 2 will take time to take effect
    // to prevent this we will use useMemo


    const isEven = useMemo(() => {
        let i =0
        while(i<1000000000){
            i++
        }
        return CounterOne % 2 === 0
    },[CounterOne])

    //Now the second button will not effect from the first one

    

    
    return (
        <div>
            <button onClick={incrementOne}>Counter - {CounterOne}</button>
            <span>{isEven ? "Even" : "Odd"}</span>
            <button onClick={incrementTwo}>Counter - {CounterTwo}</button>
        </div>
    )
}

export default Memo
