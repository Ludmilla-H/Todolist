import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../public/SignInScreen';
import SignUpScreen from '../public/SignUpScreen';
import TopCourses from '../TopCourses/TopCourses';
import ProfileScreen from '../private/ProfileScreen';
import auth from '@react-native-firebase/auth';
import { useSelector , useDispatch } from 'react-redux'
import { resetUser, setUser } from '../Redux/user';

const Stack = createNativeStackNavigator();

const RouteDavisScreen = () => {

    const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();

    const user = useSelector(state => state.user) ;
    const dispatch = useDispatch() ;

    //change et met à jour l'état de l'utilisation
    const onUserStateChanged = (user) => {

        // setUser(user);
        //si il n'y a pas d'utl set user si il y en a un user

        if (!user) {
            dispatch(resetUser())
        } else {
            dispatch(setUser(user.uid))
        }

        //eviter de faire l'app boucler sans cesse
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onUserStateChanged);
        return subscriber; // se désabonne a la fermeture
    }, []);


    return (

        <NavigationContainer>
            <Stack.Navigator>
                {!user ? (
                    <>
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />

                    </>
                ) : (
                    <>                
                        <Stack.Screen name="Home" component={TopCourses} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />

                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouteDavisScreen