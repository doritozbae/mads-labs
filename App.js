import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './screens/Home'
import Lab2 from './screens/Lab2'
import Lab3 from './screens/Lab3'
import Lab4 from './screens/Lab4'
import Lab5 from './screens/Lab5'
import Lab6 from './screens/Lab6'
import Lab7 from './screens/Lab7'
import Lab8 from './screens/Lab8'

const Drawer = createDrawerNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Lab2' component={Lab2} />
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