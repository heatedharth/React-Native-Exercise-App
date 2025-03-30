import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function RepetitionExercise({ route, navigation }) {
    const { exercise } = route.params;
    const [count, setCount] = useState(0);

    // Set the title dynamically when the component mounts
    useEffect(() => {
        navigation.setOptions({ title: exercise.name });
    }, [exercise.name, navigation]);

    const handleSuggested = () => {
        // Navigate to the suggested exercise and set title dynamically
        navigation.navigate("DurationExercise", { exercise: { name: exercise.suggested, suggested: exercise.name, type: "duration" } });
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 15 }}>
            <Text style={{ fontSize: 24 }}>{exercise.name}</Text>
            <Text style={{ fontSize: 20 }}>Count: {count}</Text>
            <Button title="Increase" onPress={() => setCount(count + 1)} />
            <Button title="Reset" onPress={() => setCount(0)} />
            <Button
                title={`Suggested: ${exercise.suggested}`}
                onPress={handleSuggested} // Use handleSuggested here
            />
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}
