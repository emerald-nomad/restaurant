import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "./types";
import { LandingScreen, SignInScreen, SignUpScreen } from "../screens";

const AuthStack = createStackNavigator<AuthStackParamList>();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Landing" component={LandingScreen} />

      <AuthStack.Screen name="SignIn" component={SignInScreen} />

      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export * from "./types";
export default Navigation;
