import '/src/css/Counter.css'

import { useCallback, useEffect, useState } from "react"
function Counter() {
  const [count, setCount]= useState(0);
  const [resourceType, setResourceType]= useState('posts');
    
    const decrement= ()=>{
        setCount(count-1);
    }
    const reset= ()=>{
        setCount(0);
    }
    const increment= useCallback(()=>{
        setCount(count+1);
    }, [count]);

    const fetchData = async (resourceType, count) => {
        if (count > 0) {
          try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}/${count}`);
            const json = await response.json();
            
            if (resourceType === "posts") {
              document.querySelector(".resourceOut").innerHTML = `<b>Title:</b> ${json.title} <br><br> <b>Body:</b> ${json.body}`;
            } else if (resourceType === "users") {
              document.querySelector(".resourceOut").innerHTML = `<b>Name:</b> ${json.name} <br><br> <b>Username:</b> ${json.username}`;
            } else if (resourceType === "comments") {
              document.querySelector(".resourceOut").innerHTML = `<b>Name:</b> ${json.name}<br> <b>Email:</b> ${json.email} <br><br> <b>Body:</b> ${json.body}`;
            }
          } catch (error) {
            console.error("Error fetching data:", error);
            document.querySelector(".resourceOut").innerHTML = `<b>Error fetching resource. Please try again later.</b>`;
          }
        } else {
          document.querySelector(".resourceOut").innerHTML = `<b>Please increase the id greater than 0!</b>`;
        }
      };
    
      // Use the function inside useEffect
      useEffect(() => {
        fetchData(resourceType, count);
      }, [count, resourceType]);
    



      return (<>
    <div className='resourceType'>
       <h3>Set your ResourceType here:</h3> 
        <select value={resourceType} onChange={e=>setResourceType(e.target.value)}>
            <option value="posts">posts</option>
            <option value="users">users</option>
            <option value="comments">comments</option>
        </select>
    </div>
     <p className='selected'>You selected: <span>{resourceType}</span></p>
        
    <p className='resourceOut'></p>
    <h3 className="timer">Id: {count}</h3>
    <br />
    <p><button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    <button onClick={increment}>increment</button></p>    
    </>)
}

export default Counter
