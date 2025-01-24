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


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}/${count}`)   
      .then(response => response.json())
      .then(json =>{
        if(count!==0) {
            if(resourceType==='posts') {
                document.querySelector('.resourceOut').innerHTML= `<b>Title:</b> ${json.title} <br><br> <b>Body:</b> ${json.body}`;
            }

            else if(resourceType==='users') {
                document.querySelector('.resourceOut').innerHTML= `<b>Name:</b> ${json.name} <br><br> <b>Usernane:</b> ${json.username}`;
            }

            else if(resourceType==='comments') {
                document.querySelector('.resourceOut').innerHTML= `<b>Name:</b> ${json.name}<br> <b>Email:</b> ${json.email} <br><br> <b>Body:</b> ${json.body}`;
            }
        }
        else {document.querySelector('.resourceOut').innerHTML=`<b>Please increase the id greater than 0!</b>`}})
    },[resourceType,count]);

    // let output= document.getElementsByTagName('select').value;


    return (<>
    <h3 className="timer">Id: {count}</h3>
    <p><button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    <button onClick={increment}>increment</button></p>    
    <p className='resourceType'>
        <h3>Set your ResourceType here: </h3>
        <select value={resourceType} onChange={e=>setResourceType(e.target.value)}>
            <option value="posts">posts</option>
            <option value="users">users</option>
            <option value="comments">comments</option>
        </select>
    </p>
     <p className='selected'>You selected: {resourceType}</p>
        
    <p className='resourceOut'></p>
    </>)
}

export default Counter
