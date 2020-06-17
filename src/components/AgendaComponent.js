import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

export const AgendaComponent = ({Agenda, onAgenda}) => {
    return (
        <View style={style.item}>
            <View style={style.head}>
                <Text style={style.number}> {Agenda.gsx$number.$t} </Text>
                <Text style={style.section}>{Agenda.gsx$section.$t}</Text>
            </View>
            <View style={style.table}>
                <View style={style.rowTable}>
                    <Text style={style.date}>Date: {Agenda.gsx$date.$t}</Text>
                    <Text style={style.date}>Time: {Agenda.gsx$timestart.$t}</Text>
                </View>
                <View>
                    <Text style={style.description}>{Agenda.gsx$name.$t}</Text>
                </View>
            </View>
            <View style={style.rowButton}>
                <View>
                    <Text style={style.info}>Chairman: {Agenda.gsx$chairmen.$t}</Text>
                    <Text style={style.info}>Secretary: {Agenda.gsx$secretary.$t}</Text>
                </View>
                <View>
                    <Button onPress={() => {
                        onAgenda(Agenda)
                    }} title='Open'/>
                </View>


            </View>

        </View>
    )
}

const style = StyleSheet.create({
    head: {
        position: 'relative'
    },
    number: {
        position: 'absolute',
        fontSize: 16,
        fontWeight: 'bold',
        left: 0
    },
    item: {
        marginBottom: 25
    },
    thead: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5
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
    }
})
