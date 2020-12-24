import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Loading from "../screens/Loading";
import SignIn from "../screens/SignIn";

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
