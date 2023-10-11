import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import tutoStyles from './tutoStyles'
import Icon from 'react-native-vector-icons/FontAwesome';

const Tuto = () => {
    return (
        <View style={tutoStyles.container}>
            <ImageBackground
                source={{ uri: "https://fleurdelangle.fr/wp-content/uploads/2020/11/valbis.jpg" }}
                resizeMode="cover"
                style={tutoStyles.box}>

                <View style={tutoStyles.box0}>
                    <View style={tutoStyles.box1}> 
                    <Text style={tutoStyles.Utilisateur}>Nom de l'utilisateur</Text>
                    <Text>Texte</Text>
                    
                    </View>
                    <View  style={tutoStyles.box2}><Icon name="send" size={25} color="#000" /></View>
                    <View  style={tutoStyles.box3}><Icon name="heart" size={25} color="#000" /></View>
                </View>
            </ImageBackground>

        </View>
    )
}

export default Tuto