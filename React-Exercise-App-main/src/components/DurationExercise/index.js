import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, "0");
        const secs = String(time % 60).padStart(2, "0");
        return `${minutes}:${secs}`;
    };

    return (
        <div>
            <h2>{name}</h2>
            <p>Time: {formatTime(seconds)}</p>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Pause" : "Start"}
            </button>
            <button onClick={() => { setSeconds(0); setIsRunning(false); }}>
                Reset
            </button>
        </div>
    );
}

export default DurationExercise;