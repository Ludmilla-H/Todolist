import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'

const SignUp = ({ navigation }) => {

    const goToSignIn = () => {
        navigation.navigate('signin')
    }

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const send = () => {


    }

    return (

        <View>

            <TextInput
                label="Nom"
                value={nom}
                onChangeText={text => setNom(text)}
            />
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                label="Mot de passe"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            {/* <TextInput
                label="Confirmer le mot de passe"
                value={password}
                onChangeText={text => setPassword(text)}
            /> */}

            <Button onPress={send}>S'inscrire</Button>
            <Button onPress={goToSignIn}>Se connecter</Button>

        </View>
    )
}

export default SignUp