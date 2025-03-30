import React, { useState, useEffect, useRef } from "react";
import { View, Text, FlatList, Button } from "react-native";

export default function RunningExercise({ route, navigation }) {
    const { exercise } = route.params; // Get exercise data from params
    const [laps, setLaps] = useState([]);
    const [startTime, setStartTime] = useState(null);
    const [running, setRunning] = useState(false);
    const [currentLapTime, setCurrentLapTime] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (startTime === null) {
            setStartTime(Date.now());
        }

        if (!running) {
            setRunning(true);
            timerRef.current = setInterval(() => {
                setCurrentLapTime((prevTime) => prevTime + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        setRunning(false);
        clearInterval(timerRef.current);
    };

    const recordLap = () => {
        if (startTime !== null) {
            setLaps((prevLaps) => [
                ...prevLaps,
                currentLapTime.toFixed(2), // Record current lap time
            ]);
            setStartTime(Date.now());
            setCurrentLapTime(0);
        }
    };

    const resetLaps = () => {
        setLaps([]);
        setStartTime(null);
        setCurrentLapTime(0);
        setRunning(false);
        clearInterval(timerRef.current);
    };

    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 15 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {exercise.name} - Running Exercise
            </Text>
            <Text style={{ fontSize: 20 }}>Current Lap Time: {currentLapTime}s</Text>

            <Button
                title={running ? "Stop Timer" : "Start Timer"}
                onPress={running ? stopTimer : startTimer}
            />
            <Button title="Record Lap" onPress={recordLap} />
            <Button title="Reset Laps" onPress={resetLaps} color="red" />

            <FlatList
                data={laps}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Text style={{ fontSize: 18 }}>
                        Lap {index + 1}: {item} seconds
                    </Text>
                )}
            />
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}

