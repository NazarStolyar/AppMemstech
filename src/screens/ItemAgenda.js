import React from 'react';
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {DB} from "../db";


export const ItemAgenda = ({Agenda, backToAgenda}) => {

    const addToFavorite = async  item => {

        const agenda = {
            section: item.gsx$section.$t,
            date: item.gsx$date.$t,
            timestart: item.gsx$timestart.$t,
            name: item.gsx$name.$t,
            chairmen: item.gsx$chairmen.$t,
            secretary: item.gsx$secretary.$t,
            description: item.gsx$description.$t
        }
        const id =  await DB.addFavorite(agenda)
        console.log(id)
    }

    return (
        <ScrollView style={style.container}>
            <View style={style.item}>
                <Text style={style.section}>{ Agenda.gsx$section.$t }</Text>
                <View style={style.table}>
                    <View style={style.rowTable}>
                        <Text style={style.date}>{ Agenda.gsx$date.$t }</Text>
                        <Text style={style.date}>{ Agenda.gsx$timestart.$t }</Text>
                    </View>
                    <View>
                        <Text style={style.description}>{ Agenda.gsx$name.$t }</Text>
                    </View>
                </View>
                <View style={style.rowButton}>
                    <View>
                        <Text style={style.info}>Chairman: {Agenda.gsx$chairmen.$t}</Text>
                        <Text style={style.info}>Secretary: {Agenda.gsx$secretary.$t}</Text>
                    </View>
                    <View>
                        <Feather.Button onPress={() => addToFavorite(Agenda)} name="star" size={24} color="#fff" >

                        </Feather.Button>
                    </View>
                </View>
                <View>
                   <Text style={style.additionsText}> {Agenda.gsx$description.$t} </Text>
                </View>
            </View>
            <Button onPress={backToAgenda} title='Back'/>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    item: {
        marginBottom: 25,

    },
    section: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    table: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopColor: '#000',
        borderBottomColor: '#000',
        borderLeftColor: '#000',
        borderRightColor: '#000',
        marginBottom: 10
    },
    rowTable: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    date: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
        borderRightWidth: 1,
        borderRightColor: '#000',
        width: '50%',
        textAlign: 'center'
    },
    description: {
        textAlign: 'center',
        padding: 10,
    },
    rowButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    info: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    additionsText: {
        fontSize: 16,
        marginTop: 20
    }
})
