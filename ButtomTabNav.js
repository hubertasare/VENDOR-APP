import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import Home from './Home';
import Signin from './SignIn';


const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"
                component={Home}
                options={{
                    tabBarLabel: "HOME",
                    tabBarIcon: ({ tintcolor }) => (
                        <Entypo name="home" size={40} color="green"/>
                    )
                }}
            />
            <Tab.Screen name="SignIn"
                component={Signin}
                options={{
                    tabBarLabel: "PROFILE", activeTintColor: 'grey',
                    tabBarIcon: ({ tintcolor }) => (
                        <Ionicons name="person-sharp" size={40} color="green"/>)
                }}
            />
            {/* <Tab.Screen name="Register"
                component={Register}
                options={{
                    tabBarLabel:"REGISTER",activeTintColor: 'grey',
                    tabBarIcon: ({tintcolor})=>(
                        <Ionicons name="person-add" size={40} color="green" />)
                        }}
             /> */}
        </Tab.Navigator>
    );
}
export default MyTabs;


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}