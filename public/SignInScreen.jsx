import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goToSignUp = () => {

        navigation.navigate('SignUp')
    }

    const connexion = async () => {

        try {

        await auth().signInWithEmailAndPassword( email , password )


            
        } catch (error) {
            console.log("error" , error)
        }
    }


    return (
        <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button  onPress={connexion} > Connection</Button>
        <Button  onPress={goToSignUp} > S'inscrire</Button>

      </View>    
      )
}

export default SignInScreen