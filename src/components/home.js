import React from "react";
import { View, FlatList } from "react-native";
import { Button } from "react-native-elements";

const exercises = [
    { name: "Push-Ups", type: "repetition", suggested: "Planks" },
    { name: "Planks", type: "duration", suggested: "Push-Ups" }
];

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <FlatList
                data={exercises}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <Button
                        title={item.name}
                        onPress={() =>
                            navigation.navigate(
                                item.type === "repetition" ? "RepetitionExercise" : "DurationExercise",
                                { exercise: item }
                            )
                        }
                        containerStyle={{ marginVertical: 10 }}
                    />
                )}
            />
        </View>
    );
}