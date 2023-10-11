import { StyleSheet } from "react-native"


export default StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "center",
    

    },
    box : {
        backgroundColor: "blue",
        width:300,
        height: 400,
        alignItems: "center",
        justifyContent: "flex-end",
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        marginTop: 20,
    },
    box0: {
        backgroundColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 300,
    },

    box1: {
        flex: 1,
        width: 50,
        height: 50,

    },

    Utilisateur: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
    },

    box2: {
        width: 50,
        height: 50,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",        
    },

    box3: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",        


    },
})