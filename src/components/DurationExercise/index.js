import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function DurationExercise({ route, navigation }) {
    const { exercise } = route.params;
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState(false);

    const startTimer = () => {
        setRunning(true);
        setInterval(() => setTimer((prev) => prev + 1), 1000);
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 24 }}>{exercise.name}</Text>
            <Text style={{ fontSize: 20 }}>Time: {timer}s</Text>
            <Button title="Start" onPress={startTimer} disabled={running} />
            <Button title="Reset" onPress={() => { setTimer(0); setRunning(false); }} />
            <Button
                title={`Suggested: ${exercise.suggested}`}
                onPress={() => navigation.navigate("RepetitionExercise", { exercise })}
            />
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}
