import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "purple",
    },

    blocDavis:{
        flexDirection: "row",
        marginTop: 40,
        marginLeft: 20,
    },

    hiDavis1: {
        height: 40,
        width: 40,
        backgroundColor: "black",
        borderRadius: 20,

    },

    hiDavis: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        color: "white",
    },

    hiDavis3: {
        fontSize: 17,
        marginLeft: 20,
        marginBottom: 15,
        color: "white",
    },

    bloc1: {
        backgroundColor: "white",
        flex: 1,  
        borderRadius: 20,      
    },

    topCoursesTitle: {
        fontSize: 30,
        margin: 13,
        color: "black",
    },

    topCoursesFlatlist: {
        width: 250,
        height: 200,
        borderRadius: 30,
        margin: 12,
    },

    topCoursesFlatlist1: {
        backgroundColor: "white",
        width: 60,
        height: 30,
        margin: 20,
        borderRadius: 20,
        fontWeight: "bold",
        textAlign: "center",

    },

    topCoursesFlatlist2:{
        fontSize: 25,
        color: "white",
        fontWeight: "600",
        marginHorizontal: 20,
    },

    topCoursesFlatlistView:{
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 20,

    },
    topCoursesFlatlistPoste:{
        backgroundColor: "black",
        borderRadius: 50,
        width: 50,
        height: 50,
    },

    topCoursesFlatlist3:{
        fontSize: 17,
        marginLeft: 20,
        color: "white",
    },

    topCoursesFlatlistName: {

        marginLeft: 20,
        fontWeight: "bold",
        color: "white",
    },
    forYou: {
        fontSize: 30,
        margin: 13,
        color: "black",

    },

    forYouflatlist: {
        margin: 10,
        borderRadius: 20,
    },

    forYouflatlistName:{
        height: 110,
        width: 90,
        borderRadius: 20,
        marginLeft: 10,
        fontSize: 13,

    },

    forYouflatlistLogo:{
        backgroundColor: "black",
        height: 30,
        width: 30,
        borderRadius: 20,
    },

    forYouflatlistContainer: {
        flexDirection: "row", 
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 15,

    },
})