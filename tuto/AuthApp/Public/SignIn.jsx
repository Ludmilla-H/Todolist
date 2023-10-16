import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import auth from '@react-native-firebase/auth';

const SignIn = ({ navigation }) => {

    const goToSignUp = () => {
        navigation.navigate('signup')
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const send = async () => {
        // console.log("envoyer", email, password)
        
        //permet de recuperer toutes les erreurs
        try {
            await auth().signInWithEmailAndPassword(email, password)

        } catch (error) {
            console.log("error", error)

        }


    }


    return (
        <View>
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                label="Mot de passe"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
            />
            <Button onPress={send}>Se connecter</Button>

            <Button onPress={goToSignUp}>S'inscrire</Button>

        </View>
    )
}

export default SignIn