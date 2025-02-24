import React, { useState } from "react";

const RunningExercise = () => {
    const [laps, setLaps] = useState([]);

    const recordLap = () => {
        setLaps([...laps, new Date().toLocaleTimeString()]);
    };

    return (
        <div>
            <h2>Running Exercise</h2>
            <button onClick={recordLap}>Record Lap</button>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>Lap {index + 1}: {lap}</li>
                ))}
            </ul>
        </div>
    );
};

export default RunningExercise;