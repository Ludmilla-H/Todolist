import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from './data'
import ItemImage from './ItemImage'

const ImageFlatlist = () => {
  return (
    <FlatList
    data={products}
    renderItem={({ item }) => <ItemImage product={item} />}
    keyExtractor={item => item.id}
    horizontal={true}
/>
)
}

export default ImageFlatlist