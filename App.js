import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'

import Input from './screens/Lab2/Input'
import Layouts from './screens/Lab2/Layouts'

import Lab3 from './screens/Lab3'
import Lab4 from './screens/Lab4'
import Lab5 from './screens/Lab5'
import Lab6 from './screens/Lab6'
import Lab7 from './screens/Lab7'
import Lab8 from './screens/Lab8'

const Drawer = createDrawerNavigator()
const Lab2Stack = createStackNavigator()

const Lab2Component = () => {
  return (
    <Lab2Stack.Navigator
      screenOptions={{
        'headerShown': false,
        initialRouteName: 'Input'
      }}
    >
      <Lab2Stack.Screen name='Input' component={Input} />
      <Lab2Stack.Screen name='Layouts' component={Layouts} />
    </Lab2Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Lab2' component={Lab2Component} />
        <Drawer.Screen name='Lab3' component={Lab3} />
        <Drawer.Screen name='Lab4' component={Lab4} />
        <Drawer.Screen name='Lab5' component={Lab5} />
        <Drawer.Screen name='Lab6' component={Lab6} />
        <Drawer.Screen name='Lab7' component={Lab7} />
        <Drawer.Screen name='Lab8' component={Lab8} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App