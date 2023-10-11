import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { products } from './data'
import leBonCoinStyles from './leBonCoinStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ItemLeboncoin = ({ product }) => {

    const goTo = () => {
        console.log('product', product.id)
    }

    return (
        
        <TouchableOpacity onPress={goTo} style={leBonCoinStyles.cardContainer}>

            <ImageBackground 
            resizeMode="cover" 
            source ={{uri:product?.thumbnail}} 
            style={leBonCoinStyles.cardImage}
            imageStyle={{borderRadius: 20}}
            >
            <View style={leBonCoinStyles.favIcon}><Icon name="favorite-outline" size={30} color="#000" /></View>
            </ImageBackground>

            <View style={leBonCoinStyles.containerTitlePrice}>
                <Text style={leBonCoinStyles.title}>{ product?.title }</Text>
                <Text style={leBonCoinStyles.price}>{ product?.price }€</Text>
            </View>
            <View style={leBonCoinStyles.containerBrand}>
                <Text style={leBonCoinStyles.brand}>{product?.brand}</Text>
                <Text style={leBonCoinStyles.brand}>{product?.category}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemLeboncoin