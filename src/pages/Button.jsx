import { useState } from "react"

function Button() {
    let [count, setCount]= useState(1);

    const increment= (e)=>{
        setCount(count+1);
        console.log(`You clicked me ${count} times`);
        e.target.textContent= 'You Clicked Me!!'
        console.log(e);
    }

  return (
  <button onClick={increment}> Click Me
  </button>
  )
}

export default Button
