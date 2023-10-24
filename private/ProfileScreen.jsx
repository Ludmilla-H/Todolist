import { View, Text, ActivityIndicator, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/dist/EvilIcons'
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';




const ProfileScreen = () => {

  const userId = useSelector(state => state.user);
  console.log(userId);

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  // const [user, setUser] = useState();
  const [status, setStatus] = useState();

  const callBackCamera = (response) => {
    console.log(response)
  }
  
  const chooseFile = async () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
          skipBackup: true, // do not backup to iCloud
          path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
      },
  }
  const result = await launchCamera(options , callBackCamera)
  console.log("result" , result)
};


// ImagePicker.showImagePicker(options, response => {
//   if (response.didCancel) {
//       console.log('User cancelled image picker', storage());
//   } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//   } else if (response.customButton) {
//       console.log('User tapped custom button: ', response.customButton);
//   } else {
//     console.log(response)
//       // let path = this.getPlatformPath(response).value;
//   }
// });

  

  const modifier = () => {

    console.log("email" , email, "prenom", prenom, "nom", nom)
    firestore().collection("user").doc(userId).update({nom , prenom}) ;
  }

  const read = async () => { 
    const snapUser = await firestore().collection('user').doc(userId).get() ;

    console.log("snapUser" , snapUser.data())
    setEmail(snapUser.data().email)
    setNom(snapUser.data().nom)
    setPrenom(snapUser.data().prenom)
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
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Button onPress={chooseFile} > + </Button>
      <Button onPress={modifier} > Valider les modifications</Button>
      <Button onPress={deconexion}>Déconexion</Button>

    </View>
  )
}

export default ProfileScreen