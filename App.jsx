import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './src/components/Calculator';
import HomeScreen from './src/components/HomeScreen';
import Stopwatch from './src/components/Stopwatch';
import Timer from './src/components/Timer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const TabMenu = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
          <MaterialCommunityIcons name="home-modern" size={size} color={color} />

          ),
        }}
      />
      <Tabs.Screen
        name="Kalkulator"
        component={Calculator}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="calculator" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Stopwatch"
        component={Stopwatch}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="timer-pause-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Timer"
        component={Timer}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="timer" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={TabMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 10,
  },
});

export default App;
