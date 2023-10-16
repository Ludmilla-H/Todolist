import { View, Text } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native-paper';

const RoutesSecure = () => {


  const logOut = (second) => {

    auth().signOut()

  }

  return (
    <View>
      <Text>Secure</Text>
      <Button onPress={logOut}>Se déconnecter</Button>
    </View>
  )
}

export default RoutesSecure