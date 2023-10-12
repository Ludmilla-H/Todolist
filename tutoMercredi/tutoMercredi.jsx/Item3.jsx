import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import HomeStyles from '../HomeStyles'

const Item3 = ({product}) => {
  return (
    <View style={HomeStyles?.flatlist}>
      <Image 
      style={HomeStyles?.flatlist3} 
      source ={{uri:product?.thumbnail}}
      />
      <Text style={HomeStyles.text1}>{product?.brand}</Text>
      <Text style={HomeStyles.text2}>{product?.price}€</Text>
      <Icon name="heart" size={20} />


      <Icon />
    </View>
  )
}

export default Item3