import React, {useState, useEffect, useCallback} from 'react'
import {View, Text, StyleSheet, ScrollView, Alert, Image} from 'react-native'
import {DB} from "../db";
import {FavoriteItemAgenda} from "../components/FavoriteItemAgenda";

export const FavoriteScreen = () => {
    const [favoriteAgenda, getFavoriteAgenda] = useState([])
    const [isNotAgenda, loadNotAgendaTemplate] = useState(false)


    const fetchFavoriteAgenda = async () => {
        const agenda = await DB.getAgenda()
        getFavoriteAgenda(agenda)

        if (agenda.length != 0) {
            loadNotAgendaTemplate(true)
        }
    }

    const loadAgenda = useCallback(async () => await fetchFavoriteAgenda(), [fetchFavoriteAgenda])

    useEffect(() => {
        fetchFavoriteAgenda()
    }, [])

    const deleteAgenda = async (item) => {
        const result = await DB.removeFavorite(item)
        fetchFavoriteAgenda()
        Alert.alert('Agenda deleted successfully')
        if (favoriteAgenda.length === 0) {
            loadNotAgendaTemplate(false)
        }
    }
    let content
    if (favoriteAgenda.length === 0) {
        if (isNotAgenda) {
            content = (<View style={style.loadContainer}>
                <Image
                    source={
                        require('../../assets/logo.png')
                    }>

                </Image>
                <Text style={style.loadText}>
                    Loading data...
                </Text>
            </View>)
        } else {
            content = (<View style={style.loadContainer}>
                <Image
                    source={
                        require('../../assets/logo.png')
                    }>

                </Image>
                <Text style={style.loadText}>
                    There is not data...
                </Text>
            </View>)
        }
    } else {
       content = (
           <View>
               {
                   favoriteAgenda.map((item) => (
                       <FavoriteItemAgenda deleteAgenda={(item) => deleteAgenda(item)} Agenda={item} key={item.id} />
                   ))
               }
           </View>
       )
    }

    return (
        <ScrollView style={style.container}>
           <View>
               { content }
           </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '75%',
        padding: 20
    },
    loadContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        marginTop: 40
    },
    loadText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15
    }
})
