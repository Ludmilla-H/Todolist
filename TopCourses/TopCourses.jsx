import { View, Text, FlatList } from 'react-native'
import React from 'react'
import topCoursesStyles from './topCoursesStyles'
import ItemCourses from './ItemCourses'
import ItemForYou from './ItemForYou'

export const users = [
    {
        id: 1,
        rate: 4.9,
        title: "ui/UX Design",
        poste: "Teacher",
        name: "Gustavo Kenter",
        color: "#00cfcb",
    },
    {
        id: 2,
        rate: 4.9,
        title: "ui/UX Design",
        poste: "Teacher",
        name: "Gustavo Kenter",
        color: "#ff658c",
    },
    {
        id: 3,
        rate: 4.9,
        title: "ui/UX Design",
        poste: "Teacher",
        name: "Gustavo Kenter",
        color: "#7666ff",
    },
    {
        id: 4,
        rate: 4.9,
        title: "ui/UX Design",
        poste: "Teacher",
        name: "Gustavo Kenter",
        color: "#00fccb"
    },
    {
        id: 5,
        rate: 4.9,
        title: "ui/UX Design",
        poste: "Teacher",
        name: "Gustavo Kenter",
        color: "#ff658c"
    },
]

const TopCourses = () => {
    return (
        <View style={topCoursesStyles.container}>

            <View style={topCoursesStyles.blocDavis}>
                <View >
                    <View style={topCoursesStyles.hiDavis1}></View>

                </View>
                <View>
                    <Text style={topCoursesStyles.hiDavis}>Hi, Davis</Text>

                    <Text style={topCoursesStyles.hiDavis3}>learning is easier</Text>
                </View>

            </View>


            <View style={topCoursesStyles.bloc1}>
                <View>
                    <Text style={topCoursesStyles.topCoursesTitle}>Top Courses </Text>
                </View>

                <View>
                    <FlatList
                        data={users}
                        renderItem={({ item }) => <ItemCourses user={item} />}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>

                <View>
                    <Text style={topCoursesStyles.forYou}>For You </Text>
                </View>
                <View>
                    <FlatList
                        data={users}
                        renderItem={({ item }) => <ItemForYou user={item} />}
                        keyExtractor={item => item.id}
                        numColumns={2}


                    />
                </View>


            </View>



        </View>
    )
}

export default TopCourses