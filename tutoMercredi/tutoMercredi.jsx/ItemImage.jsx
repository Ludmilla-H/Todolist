import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import HomeStyles from '../HomeStyles'

const ItemImage = ({product}) => {
  return (
    <View>

      <Image 
      style={HomeStyles?.imageFlatlist} 
      source ={{uri:product?.thumbnail}}
      />
      <Text style={HomeStyles.textProduct}>{product?.title}</Text>
      <Text>{product?.price}€</Text>
    </View>
  )
}

export default ItemImage