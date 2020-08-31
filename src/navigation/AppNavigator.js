import React from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SearchScreen from '../screens/SearchScreen';
import VideoPlayer from '../screens/VideoPlayer';
import Explore from '../screens/Explore';
import Subscribe from  '../screens/Subscribe'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = (props)=>{
    return(
        <Tab.Navigator
        
        tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor:'red',
            
            
            
        }}

          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              let iconName;
  
              if (route.name === 'Home') {
                return <Image source={require('../components/homeIcon.png')} style={{width:35,height:30}} />;
              } else if (route.name === 'Explore') {
                return <Image source={require('../components/exploreIcon.png')} style={{width:35,height:30}} />;
              }
              else if(route.name === 'Subscribe'){
                return <Image source={require('../components/subscribeIcon.png')} style={{width:35,height:30}} />;

              }
  
              // You can return any component that you like here!
              
            },
          })}
        >
            <Tab.Screen
            name="Home"
            component={Home}
        
            />

            <Tab.Screen
            name="Explore"
            component={Explore}
            />

            <Tab.Screen
            name="Subscribe"
            component={Subscribe}
            />
        </Tab.Navigator>
    )
}

const AppNavigator = (props)=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{headerShown:false}}>
                <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                />
                <Stack.Screen 
                name="Home" 
                component={Home}
                options={{header:{}}}
                />

                <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                />

                <Stack.Screen
                name="VideoPlayer"
                component={VideoPlayer}
                />    
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;