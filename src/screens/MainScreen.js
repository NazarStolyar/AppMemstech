import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {startAssets} from "../startAssents";

export const MainScreen = () => {

    const list = [
        {name: 'Stability Analysis of Micro-Electrostatic Actuator’s Dynamic. Roman Voliansky, Vitaliy Kuznetsov, Oleksiy Sinkevych', id: '1'},
        {name: 'Simulation Modelling of Reliability of the Embedded Systems With Consideration for Failures. Mykola Dekhtyaruk, Viacheslav Cherevik', id: '2'},
    ]

    startAssets()

    return (
        <ScrollView style={style.container}>
            <Text style={style.title}>Conference news!</Text>
            <View style={style.containerImage}>
                <Image
                    style={style.images}
                    source={
                        require('../../assets/main_screen.jpg')
                    }
                >
                </Image>
            </View>
            <View style={style.textContainer}>
                <Text style={style.paragraph}>
                    Due to the rapid worldwide spreading of the coronavirus infection (COVID-2019)
                    and announced quarantine in Ukraine and many other EU countries,
                    the MEMSTECH'2020 conference was held in a
                    distance on-line form.
                </Text>
                <Text style={style.paragraph}>
                    This is a new challenge for all of us and we appreciate participants who have
                    submitted their papers, as well as invited speakers who
                    have kindly agreed to make presentations at MEMSTECH'2020.
                </Text>
                <Text style={style.paragraph}>
                    There were 39 presentations at the conference. However, two reports were not announced:
                </Text>
                <View>
                    {
                        list.map( item => (
                            <View key={item.id} style={style.listWrap}>
                                <AntDesign name="check" size={24} color="black" />
                                <Text style={style.listWrapText}>{item.name}</Text>
                            </View>
                        ) )
                    }
                </View>

            </View>

        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '75%',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: 'bold'
    },
    images: {
        width: '90%',
        height: '100%'
    },
    containerImage: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    },
    textContainer: {
        padding: 20,
    },
    paragraph: {
        marginBottom: 20,
        fontSize: 16
    },
    listWrap: {
        flexDirection: 'row',
        marginBottom: 15
    },
    listWrapText: {
        paddingLeft: 10,
        fontSize: 16
    }
})
