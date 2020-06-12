import React, {useEffect, useCallback, useState} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableHighlight} from 'react-native'
import {AgendaComponent} from "../components/AgendaComponent";
import {ItemAgenda} from "./ItemAgenda";
import {Env} from '../enviroments/env'

export const AgendaScreen = () => {
    const [agenda, setAgenda] = useState([])
    const [filterAgenda, setFilter] = useState([])
    const [session, setSesion] = useState([])
    const [itemAgenda, AgendaScreen] = useState(null)
    const [text, setText] = useState('')
    const [isSession, setSession] = useState(false)


    const fetchAgenda = async () => {
        const response = await fetch(Env.gsUrl, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json()
        setAgenda(data.feed.entry)
        setFilter(data.feed.entry)
        let arr = []
        data.feed.entry.map((item, index) => {
            arr.push({
                name: item.gsx$section.$t,
                id: index
            })
        })
        let uniqIds = {}
        let newArr = arr.filter(obj => !uniqIds[obj.name] && (uniqIds[obj.name] = true))
        setSesion(newArr)
    }

    const loadAgenda = useCallback(async () => await fetchAgenda())

    useEffect(() => {
        fetchAgenda()
    }, [])

    let newAgenda;
    const changeText = (text) => {
        newAgenda = agenda.filter(item => {
            return item.gsx$chairmen.$t.indexOf(text) > -1 || item.gsx$secretary.$t.indexOf(text) > -1
        })
        setFilter(newAgenda)
    }

    const filterSession = (name) => {
        console.log(name)
        newAgenda = agenda.filter(item => {
            return item.gsx$section.$t === name
        })
        setFilter(newAgenda)
        setSession(true)
    }

    let content
    if (agenda.length === 0) {
        content = (
            <View style={style.loadContainer}>
                <TextInput  placeholder="Enter text" style={style.input} onChangeText={text => changeText(text)}/>
                <Image
                    source={
                        require('../../assets/logo.png')
                    }>

                </Image>
                <Text style={style.loadText}>
                    Loading data...
                </Text>
            </View>
        )
    } else {

        if (!itemAgenda) {

            if (!isSession) {
                content = (
                    <View>
                        {
                            session.map(item => (
                                <TouchableHighlight key={item.id} onPress={() => filterSession(item.name)} style={style.session}>
                                    <Text style={style.sessionText}>
                                        { item.name }
                                    </Text>
                                </TouchableHighlight>
                            ))
                        }
                    </View>
                )
            } else {
                content = (
                    <View>
                        <TextInput  placeholder="Enter text" style={style.input} onChangeText={text => changeText(text)}/>
                        {
                            filterAgenda.map((item) => (
                                <AgendaComponent key={item.gsx$number.$t} style={style.itemAgenda} onAgenda={(item) => {
                                    AgendaScreen(item)
                                }} Agenda={item}/>
                            ))
                        }
                    </View>

                )
            }


        } else {
            content = <ItemAgenda backToAgenda={() => AgendaScreen(null)} Agenda={itemAgenda}/>
        }
    }
    return (
        <ScrollView style={style.container}>
            <View>
                {content}
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        height: '75%',
        padding: 20,
        width: '100%'
    },
    itemAgenda: {
        marginBottom: 15,
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#00AAFF',
        marginBottom: 20,
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
    },
    session: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        borderWidth: 2
    },
    sessionText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
