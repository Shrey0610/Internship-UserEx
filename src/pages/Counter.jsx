import '/src/css/Counter.css'

import { useState } from "react"
function Counter() {
  const [count, setCount]= useState(0);
    
    const decrement= ()=>{
        setCount(count-1);
    }
    const reset= ()=>{
        setCount(0);
    }
    const increment= ()=>{
        setCount(count+1);
    }

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         increment();
    //     },1000);
    // },[]);


    return (<>
    <h3 className="timer">Timer: {count}</h3>
    <p><button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    <button onClick={increment}>increment</button></p>    
    </>)
}

export default Counter
