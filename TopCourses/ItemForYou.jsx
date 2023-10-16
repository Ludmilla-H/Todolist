import { View, Text } from 'react-native'
import React from 'react'
import topCoursesStyles from './topCoursesStyles'

const ItemForYou = ({ user }) => {
    return (
        <View style={{ ...topCoursesStyles.forYouflatlist, backgroundColor: user.color }}>

            <View style={topCoursesStyles.forYouflatlistContainer}>
                <Text style={topCoursesStyles.forYouflatlistLogo}></Text>
                <Text style={topCoursesStyles.forYouflatlistName} >{user.name}</Text>
            </View>
            <View style={topCoursesStyles.forYouflatlistContainer1}>

            </View>
            <View>

            </View>
        </View>
    )
}

export default ItemForYou