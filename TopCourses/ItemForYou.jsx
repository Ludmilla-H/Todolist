import { View, Text } from 'react-native'
import React from 'react'
import topCoursesStyles from './topCoursesStyles'

const ItemForYou = ({ user }) => {
    return (
        <View style={{ ...topCoursesStyles.forYouflatlist, backgroundColor: user.color }}>

            <View style={topCoursesStyles.forYouflatlistContainer}>

                <View style={topCoursesStyles.forYouflatlistContainer1}>
                    <Text style={topCoursesStyles.forYouflatlistLogo}></Text>
                    <Text style={topCoursesStyles.forYouflatlistName} >{user.name}</Text>
                </View>

                <View style={topCoursesStyles.forYouflatlistContainer2}>
                    <View >
                        <Text style={topCoursesStyles.forYouflatlistContainer3}>{user?.rate}</Text>
                        <View style={topCoursesStyles.forYouflatlistContainer4}>
                            <Text style={topCoursesStyles.forYouflatlistText}>{user?.poste}</Text>
                        </View>

                    </View>




                </View>

            </View>
            <View>

            </View>
        </View>
    )
}

export default ItemForYou