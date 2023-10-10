import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import ItemTodo from './ItemTodo'

const ListerTodo = () => {

    /*
    * initialiser nos state : todos, loading
    */
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        console.log("Lister")
        //snapshot = abonnement a toutes les modif de la base de donnée

        firestore().collection('Todo').onSnapshot(querySnapshot => {

            const dataTodos = [];

            //lecture des documents dans la collection de la base de donnée
            querySnapshot.forEach(doc => {

                dataTodos.push({ id: doc.id, ...doc.data() })
            })

            setTodos(dataTodos) ;

            loading && setLoading(false)
        })
    }, [])

    return (
        <View>
            {loading ? <ActivityIndicator animating={true} /> :
                <FlatList
                    data={todos}
                    renderItem={({ item }) => <ItemTodo todo={item} />}
                    keyExtractor={item => item.id}

                />

            }
        </View>
    )
}

export default ListerTodo