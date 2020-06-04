import React, {useState, useEffect, useCallback} from 'react'
import {View, Text, StyleSheet, ScrollView, TextInput, Image} from 'react-native'
import {DB} from "../db";
import {AgendaComponent} from "../components/AgendaComponent";

export const FavoriteScreen = () => {
    const [favoriteAgenda, getFavoriteAgenda] = useState([])

    const fetchFavoriteAgenda = async () => {
        const agenda = await DB.getAgenda()
        getFavoriteAgenda(agenda)
    }

    const loadAgenda = useCallback(async () => await fetchFavoriteAgenda(), [fetchFavoriteAgenda])

    useEffect(() => {
        fetchFavoriteAgenda()
    }, [])
    let content
    if (favoriteAgenda.length === 0) {
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
       content = (
           <View>

               {
                   favoriteAgenda.map((item) => (
                      <Text>
                          { item.name }
                      </Text>
                   ))
               }

           </View>
       )
    }


    return (
        <ScrollView>
           <View>
               { content }
           </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
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
