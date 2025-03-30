import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";

const RunningExercise = () => {
    const [laps, setLaps] = useState([]);
    const [startTime, setStartTime] = useState(null);

    const recordLap = () => {
        const currentTime = Date.now();

        if (startTime === null) {
            setStartTime(currentTime);
        } else {
            const lapTime = ((currentTime - startTime) / 1000).toFixed(2);
            setLaps([...laps, lapTime]);
            setStartTime(currentTime);
        }
    };

    const resetLaps = () => {
        setLaps([]);
        setStartTime(null);
    };

    return (
        <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Running Exercise</Text>
            <Button title="Record Lap" onPress={recordLap} />
            <Button title="Reset Laps" onPress={resetLaps} color="red" />

            <FlatList
                data={laps}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Text style={{ fontSize: 18 }}>Lap {index + 1}: {item} seconds</Text>
                )}
            />
        </View>
    );
};

export default RunningExercise;
