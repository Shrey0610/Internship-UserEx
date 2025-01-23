import { useEffect, useState, useRef } from "react";
import '/src/css/StopWatch.css';

function StopWatch() {
  
const [isRunning, setIsRunning]= useState(false);
const [elapsedTime, setElapsedTime]= useState(0);
const intervalIdRef= useRef(null);

const startTimeRef= useRef(0);

useEffect(()=>{
    if(isRunning){
        intervalIdRef.current= setInterval(()=>{
            setElapsedTime(Date.now()-startTimeRef.current);
        },10)
    }

    return ()=>{
        clearInterval(intervalIdRef.current);
    }
},[isRunning]);

function start(){
    setIsRunning(true);
    startTimeRef.current= Date.now() - elapsedTime;

    // console.log(startTimeRef.current);
}
function stop(){
    setIsRunning(false);
}

function reset(){
    setIsRunning(false);
    setElapsedTime(0);
}

function formatTime(){
    // let hours= Math.floor(elapsedTime/3600000);

    let min= Math.floor(elapsedTime/(1000*60)%60);

    let sec= Math.floor(elapsedTime/1000)%60;

    let millisec= Math.floor(elapsedTime%1000/10);

    // hours= String(hours).padStart(2,"0");
    min= String(min).padStart(2,"0");
    sec= String(sec).padStart(2,"0");
    millisec= String(millisec).padStart(2,"0");

    return `${min}:${sec}:${millisec}`;
}


    return (
        <main>
    <div className="stopwatch">
        <h1>Stop Watch:</h1>
        <div className="display">
            {formatTime()}
        </div>
        <div className="controls">
            <button className="start-button" onClick={start}>Start</button>
            
            <button className="stop-button" onClick={stop}>Stop</button>

            <button className="reset-button" onClick={reset}>Reset</button>

        </div>

    </div></main>)
}

export default StopWatch
