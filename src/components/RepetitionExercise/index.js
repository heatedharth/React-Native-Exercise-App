import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function RepetitionExercise({ route, navigation }) {
    const { exercise } = route.params;
    const [count, setCount] = useState(0);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 24 }}>{exercise.name}</Text>
            <Text style={{ fontSize: 20 }}>Count: {count}</Text>
            <Button title="Increase" onPress={() => setCount(count + 1)} />
            <Button title="Reset" onPress={() => setCount(0)} />
            <Button
                title={`Suggested: ${exercise.suggested}`}
                onPress={() => navigation.navigate("DurationExercise", { exercise })}
            />
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}
