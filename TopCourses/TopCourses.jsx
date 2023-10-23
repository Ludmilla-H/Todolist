import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import topCoursesStyles from './topCoursesStyles'
import ItemCourses from './ItemCourses'
import ItemForYou from './ItemForYou'
import { Button } from 'react-native-paper'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native'

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

    const navigation = useNavigation() ;



    const profileScreen = () => {
        navigation.navigate("Profile")
    }

    return (
        <View style={topCoursesStyles.container}>


            <View style={topCoursesStyles.blocDavis}>

                <View >
                    <Button onPress={profileScreen} style={topCoursesStyles.hiDavis1}></Button>

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