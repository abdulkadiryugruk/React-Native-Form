import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";

function RootNavigation() {

  const {isAuth} = useSelector((state)=>state.user)

  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
}

export default RootNavigation;
