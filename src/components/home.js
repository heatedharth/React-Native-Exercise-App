import React from "react";
import { View, FlatList } from "react-native";
import { Button } from "react-native-elements";

const exercises = [
    { name: "Push-Ups", type: "repetition", suggested: "Planks" },
    { name: "Planks", type: "duration", suggested: "Push-Ups" },
    { name: "Running", type: "running", suggested: "Planks" } // Added RunningExercise
];

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <FlatList
                data={exercises}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 10 }}>
                        <Button
                            title={item.name}
                            onPress={() => {
                                if (item.type === "running") {
                                    // Navigate to RunningExercise and pass exercise data
                                    navigation.navigate("RunningExercise", { exercise: item });
                                } else {
                                    navigation.navigate(
                                        item.type === "repetition" ? "RepetitionExercise" : "DurationExercise",
                                        { exercise: item }
                                    );
                                }
                                navigation.setOptions({ title: item.name }); // Set title dynamically
                            }}
                            containerStyle={{ marginVertical: 10 }}
                        />
                    </View>
                )}
            />
        </View>
    );
}


