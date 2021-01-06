import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import ProfileScreen from "../screens/Profile";

import { COLORS } from "../themes/theme";

const Tabs = createBottomTabNavigator();

export default function AppRoutes() {
  const icons = {
    Home: {
      name: "home",
    },
    Search: {
      name: "search",
    },
    Profile: {
      name: "user",
    },
  };

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];

          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.white,
        showLabel: false,
        activeBackgroundColor: COLORS.green,
        tabStyle: {
          borderRadius: 50,
          marginTop: 5,
          marginBottom: 5,
        },
        style: {
          borderTopWidth: 1,
          borderTopColor: COLORS.gray,
        },
      }}
    >
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}
