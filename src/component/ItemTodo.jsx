import { View, Text, Button } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';
import styles from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome'



const ItemTodo = ({ todo }) => {

    const supprimer = () => {
        firestore().collection("Todo").doc(todo.id).delete();
    }

    //fonction pour les taches réaliser
    const realiser = () => {
        firestore().collection("Todo").doc(todo.id).update({
            status: !todo.status,
        })

    }

    return (
        <View style={styles.todoContainer}>
            <View style={styles.textView}>
            {todo.status ? <Text style={styles.tachesUn} >{todo?.task}</Text> : <Text style={styles.tachesDeux}>{todo?.task}</Text>}
            </View>

            <View style={styles.buttonView}>
            <Icon onPress={realiser} name="check"  size={20} color="#000" />
            <Icon onPress={supprimer} name="trash" size={20} color="#000" />


            </View>
        </View>
    )
}

export default ItemTodo