import React, {useEffect, useCallback, useState} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native'
import {AgendaComponent} from "../components/AgendaComponent";
import {ItemAgenda} from "./ItemAgenda";

export const AgendaScreen = () => {
    const [agenda, setAgenda] = useState([])
    const [filterAgenda, setFilter] = useState([])
    const [itemAgenda, AgendaScreen] = useState(null)
    const [text, setText] = useState('')


    const fetchAgenda = async () => {
        const response = await fetch('https://spreadsheets.google.com/feeds/list/1fy9Qcp82GtqALhdBSISPLehdJf0HirArVcpeFxYVFQ8/od6/public/values?alt=json', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json()
        setAgenda(data.feed.entry)
        setFilter(data.feed.entry)
    }

    const loadAgenda = useCallback(async () => await fetchAgenda())

    useEffect(() => {
        fetchAgenda()
    }, [])

    let newAgenda;
    const changeText = (text) => {
        newAgenda = agenda.filter(item => {
            return item.gsx$name.$t.indexOf(text) > -1
        })
        console.log(newAgenda.length)
        setFilter(newAgenda)
    }

    let content
    if (agenda.length === 0) {
       content = (
           <View>
               <TextInput style={style.input} onChangeText={text => changeText(text)}/>
               <Text>
                   Loading data...
               </Text>
           </View>
       )
    } else {

        if (!itemAgenda) {
            content = (
                <View>
                    <TextInput style={style.input} onChangeText={text => changeText(text)}/>
                    {
                        filterAgenda.map((item) => (
                            <AgendaComponent key={item.gsx$number.$t} style={style.itemAgenda} onAgenda={(item) => {
                                AgendaScreen(item)
                            } } Agenda={item} />
                        ))
                    }
                </View>

            )
        } else {
            content =  <ItemAgenda backToAgenda={() => AgendaScreen(null)} Agenda={itemAgenda} />
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
    }
});
