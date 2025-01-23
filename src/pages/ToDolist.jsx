import { useState } from "react";
import '/src/css/ToDolist.css';

export default function ToDolist() {

    const [tasks, setTasks]= useState(['Eat Breakfast', 'Go to Work', 'Eat Lunch', 'Go Home']);
    const [newTask, setNewTask]= useState("");
  
    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){
        if(newTask.trim !== ""){
            setTasks(t=>([...t, newTask]));
            setNewTask("");
        }
        else{
            setNewTask("");
        }
    }

    function removeTask(index){
        setTasks(tasks.filter((_,i)=> i!==index));
    }
    
    function moveup(index){
        const up = [...tasks];
            if(index>0){
            [up[index], up[index-1]]= [up[index-1], up[index]];
            setTasks(up);
        }
    }
    function movedown(index){
        const down = [...tasks];
            if(index<tasks.length-1){
            [down[index], down[index+1]]= [down[index+1], down[index]];
            setTasks(down);
        }
    }


    return (<>  
    <div className="todo">
        <h3>To-Do List:</h3>
        <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange} />
        <button onClick={addTask}>
            Add
        </button>

        <ol>
           {tasks.map((t,i)=> <li key={i}>{t}<button onClick={()=>removeTask(i)}>Delete</button> <button onClick={()=>moveup(i)}>☝🏻</button> <button onClick={()=>movedown(i)}>👇🏻</button></li>)} 
        </ol>
    </div>
    </>);
}
