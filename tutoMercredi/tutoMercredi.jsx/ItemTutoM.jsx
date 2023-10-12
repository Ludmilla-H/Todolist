import { View, Text } from 'react-native'
import React from 'react'
import HomeStyles from '../HomeStyles'

const ItemTutoM = ({product}) => {
  return (
    <View>
      <Text style={HomeStyles.categoryFlatlist}>{product?.category}</Text>
    </View>
  )
}

export default ItemTutoM