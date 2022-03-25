import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainFlow from "./MainFlow";

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <MainFlow />
    </NavigationContainer>
  );
};

export default Navigation;
