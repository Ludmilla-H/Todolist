import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import tutoMercrediStyles from '../tutoMercrediStyles'

const FirstSrceen = () => {
  return (
    <View style={tutoMercrediStyles.container}>
      <ImageBackground
        source={{ uri: "https://media.istockphoto.com/id/1165399909/fr/photo/d%C3%A9licieux-repas-sur-une-assiette-noire-vue-du-haut-espace-de-copie.jpg?b=1&s=612x612&w=0&k=20&c=sRgYdsIeL-AlDxi_WRoTi_bzTpharzwatNyPU23osp8=" }}
        resizeMode="cover"
        style={tutoMercrediStyles.image}>

        <Text style={tutoMercrediStyles.textImage1}>Notre nouveauté !</Text>
        <Text style={tutoMercrediStyles.textImage2}>  N'hésiter pas à découvrir cette nouvelle recette. </Text>
        <View style={tutoMercrediStyles.viewButton}>
          <Button style={tutoMercrediStyles.buttonImage} labelStyle={{ color: "brown", fontSize: 15, }} title="Go to Details" >Découvrir nos recettes</Button>
        </View>
      </ImageBackground>
    </View>
  )
}

export default FirstSrceen