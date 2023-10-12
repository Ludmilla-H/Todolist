import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Item3 from './Item3'
import { products } from './data'

const Flatlist3 = () => {
  return (
<FlatList
data={products}
renderItem={({item}) => <Item3 product={item}/>}
keyExtractor= {item => item.id}



/>  )
}

export default Flatlist3