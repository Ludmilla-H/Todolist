import {StyleSheet} from 'react-native'

export default StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: "#9FD9EC",
        padding: 10,
    },

    titleTodo:{
        fontSize: 25,
        textAlign: "center",
        marginVertical: 15,
        fontWeight: "bold",
        color: "black",
    },

    addInput:{
        borderColor: "black" ,
        borderBottomWidth: 3,
        fontSize: 20,
        marginBottom: 20
    },
    

    todoContainer: {
        flexDirection: "row",
        justifyContent: "space-between"

    },

    textView: {
        flex: 5,
        marginVertical: 10,
    },

    buttonView:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 15,

    },

    tachesUn:{
        backgroundColor:"black",
        textDecorationLine: "line-through",
        color: "#FFF",
        paddingVertical: 10,
        borderRadius: 20,
        textAlign: "center" ,
        fontSize: 15,
    },
    tachesDeux:{
        backgroundColor:"black",
        color: "#FFF",
        paddingVertical: 10,
        borderRadius: 20,
        textAlign: "center" ,
        fontSize: 15,
    },

})

