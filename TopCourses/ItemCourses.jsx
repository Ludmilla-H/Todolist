import { View, Text } from 'react-native'
import React from 'react'
import topCoursesStyles from './topCoursesStyles'

const ItemCourses = ({ user }) => {
    console.log(user)
    return (
        <View style={{ ...topCoursesStyles.topCoursesFlatlist, backgroundColor: user.color }}>
            <Text style={topCoursesStyles.topCoursesFlatlist1}>{user?.rate}</Text>

            <Text style={topCoursesStyles.topCoursesFlatlist2}>{user?.title}</Text>

            <View style={topCoursesStyles.topCoursesFlatlistView}>
                <View >
                    <Text style={topCoursesStyles.topCoursesFlatlistPoste}></Text>
                </View>
                <View>
                    <Text style={topCoursesStyles.topCoursesFlatlist3}>{user?.poste}</Text>
                    <Text style={topCoursesStyles.topCoursesFlatlistName} >{user?.name}</Text>
                </View>
            </View>

        </View>
    )
}

export default ItemCourses