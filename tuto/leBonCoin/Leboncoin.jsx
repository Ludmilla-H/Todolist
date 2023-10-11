import { View, Text, FlatList } from 'react-native'
import React from 'react'
import leBonCoinStyles from './leBonCoinStyles'
import ItemLeboncoin from './ItemLeboncoin'
import { products } from './data'

const Leboncoin = () => {
    return (
        <View style={leBonCoinStyles.container}>
            <FlatList
            data={products}
            renderItem= {({item}) => <ItemLeboncoin product={item} />}
            keyExtractor={item => item.id}
            
            />

        </View>
    )
}

export default Leboncoin