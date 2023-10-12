import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ItemTutoM from './ItemTutoM'
import { products } from './data'
import tutoMercrediStyles from '../tutoMercrediStyles'
import HomeStyles from '../HomeStyles'

const FlatCategory = () => {
    return (

        
            <FlatList
                data={products}
                renderItem={({ item }) => <ItemTutoM product={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
            />
    )
}

export default FlatCategory