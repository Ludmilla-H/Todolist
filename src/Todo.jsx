import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import AddTodo from './component/AddTodo'
import ListerTodo from './component/ListerTodo'

const Todo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleTodo}>My Todolist</Text>
            <AddTodo />
            <ListerTodo />

        </View>
    )
}

export default Todo