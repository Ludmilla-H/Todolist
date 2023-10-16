import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Public/SignUp';
import SignIn from '../Public/SignIn';


const Stack = createNativeStackNavigator();

const RoutesPublic = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='signup' component ={SignUp}/>
        <Stack.Screen name='signin' component ={SignIn}/>
    </Stack.Navigator>
  )
}

export default RoutesPublic