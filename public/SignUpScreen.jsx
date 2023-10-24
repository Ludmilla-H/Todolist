import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goToSignIn = () => {

        navigation.navigate('SignIn')
    }

    const inscription = async () => {

        try {

            if (email != "" && password != "") {
                console.log("pas vide")
                const userAuth = await auth().createUserWithEmailAndPassword( email , password )
                console.log("userAuth" , userAuth)

                const uid = userAuth.user.uid
                //enregistrement de l'utilisateur en base de donnée à l'aide de son uid (user:id)
                await firestore().collection("user").doc(uid).set({email:email.trim()})
            }

            console.log("email", email, "password", password)



        } catch (error) {
            console.log("error", error)

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
            <Button onPress={inscription} >S'inscrire</Button>
            <Button onPress={goToSignIn}> Se connecter </Button>


        </View>
    )
}

export default SignUpScreen