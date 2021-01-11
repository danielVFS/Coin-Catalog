import React from "react";
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome";

import SearchScreen from "../screens/Search";
import ProfileScreen from "../screens/Profile";
import TypeScreen from "../screens/Type";
import PeriodScreen from "../screens/Period";

import { COLORS } from "../themes/theme";

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Type"
        component={TypeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Period"
        component={PeriodScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

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
        activeBackgroundColor: COLORS.tertiary,
        keyboardHidesTabBar: true,
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
      <Tabs.Screen name="Home" component={StackNavigation} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}
