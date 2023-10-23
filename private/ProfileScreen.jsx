import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';



const ProfileScreen = () => {

  const userId = useSelector(state => state.user);
  console.log(userId);

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState();

  const modifier = () => {


  }

  const read = async () => { 
    const snapUser = await firestore().collection('user').doc(userId).get() ;

    console.log("snapUser" , snapUser)
  }


  const deconexion = () => {

    auth().signOut();

  }


  useEffect(() => {
    read()
  }, [])
  

  return (
    <View>
      <TextInput
        placeholder="nom"
        value={nom}
        onChangeText={setNom}
      />
      <TextInput
        placeholder="Prenom"
        value={prenom}
        onChangeText={setPrenom}
        secureTextEntry
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        secureTextEntry
      />

      <Button onPress={modifier} > Valider les modifications</Button>
      <Button onPress={deconexion}>Déconexion</Button>

    </View>
  )
}

export default ProfileScreen