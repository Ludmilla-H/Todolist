import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import RoutesPublic from './Secure/RoutesPublic'
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import RoutesSecure from './Secure/RoutesSecure';


const AuthApp = () => {

    {/* partie de l'écouteur */ }

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChange = (user) => {

        setUser(user)

        if (initializing) {
            setInitializing
        }

    }

    //s'abonner au changement d'état de la collection
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChange)

        if (initializing) return null


        return subscriber
    }, [])



    return (
        <>

            {(!user) ? <NavigationContainer>
                <RoutesPublic />
            </NavigationContainer> : <RoutesSecure />}

        </>

    )
}

export default AuthApp