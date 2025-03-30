import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RepetitionExercise" component={RepetitionExercise} />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
        <Stack.Screen name="RunningExercise" component={RunningExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}