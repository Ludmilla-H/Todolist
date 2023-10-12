import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import HomeStyles from '../HomeStyles'
import Input from './Input'
import FlatCategory from './FlatCategory'
import ImageFlatlist from './ImageFlatlist'
import Flatlist3 from './Flatlist3'

const HomeScreen = () => {
    return (
        <View style= {HomeStyles.container}>
            <View style={HomeStyles.navbarContainer}>
                <Icon name="menu" size={35} />
                <View style={HomeStyles.profilImage}></View>
            </View>
            <View>
                <Text style={HomeStyles.decouvrirText}>Découvrir</Text> 
            </View>
            <View>
                <Input/>
            </View>
            <View >
                <FlatCategory />
            </View>
            <View >
                <ImageFlatlist />
            </View>
            <View style={HomeStyles.Popular}>
                <Text style={HomeStyles.popular1}>Popular</Text>
                <Text style={HomeStyles.popular2}>See All</Text>
            </View>
            <View>
                <Flatlist3/>

            </View>
        </View>
    )
}

export default HomeScreen