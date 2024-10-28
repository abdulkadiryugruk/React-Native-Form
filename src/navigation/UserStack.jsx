import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../screens/login/homePage";
const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
};

export default UserStack;
