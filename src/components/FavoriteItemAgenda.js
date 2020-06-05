import React from 'react'
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native'

export const FavoriteItemAgenda = ({Agenda, deleteAgenda}) => {
    return (
        <View style={style.item}>
            <Text style={style.section}>{ Agenda.section }</Text>
            <View style={style.table}>
                <View style={style.rowTable}>
                    <Text style={style.date}>{ Agenda.date }</Text>
                    <Text style={style.date}>{ Agenda.timestart }</Text>
                </View>
                <View>
                    <Text style={style.description}>{ Agenda.name }</Text>
                </View>
            </View>
            <View style={style.rowButton}>
                <View>
                    <Text style={style.info}>Chairman: {Agenda.chairmen}</Text>
                    <Text style={style.info}>Secretary: {Agenda.secretary}</Text>
                </View>
                <View>
                    <Button onPress={() => deleteAgenda(Agenda)} title='Delete' />
                </View>
            </View>
            <View>
                <Text style={style.additionsText}> {Agenda.description} </Text>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    item: {
        marginBottom: 25
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
