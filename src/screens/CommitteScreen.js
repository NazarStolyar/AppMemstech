import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native'

export const CommitteScreen = () => {

    const flatList = [
        {
            name: 'Prof.Jan Dziuban, Co-Chairman',
            description: 'The Faculty of Microsystem Electronics and Photonics, Wroclaw University of Science and Technology, Poland',
            id: '0'
        },
        {
            name: 'Prof.Marek Iwaniec, Co-Chairman',
            description: 'The Faculty of Mechanical Engineering and Robotics, AGHUniversity of Science and Technology, Poland',
            id: '1'
        },
        {
            name: 'Prof.Mykhaylo Lobur, Co-Chairman',
            description: 'Head of CAD Department, Lviv Polytechnic National University, Ukraine',
            id: '2'
        },
        {
            name: 'Dr.Mykhaylo Melnyk, Secretary',
            description: 'CAD Department, Lviv Polytechnic National University, Ukraine',
            id: '3'
        },
        {
            name: 'Dr.Mykhaylo Andriychuk, Member',
            description: 'CAD Department IEEE Ukraine Section (West) MTT/ED/AP/EP/SSC Societies Joint Chapter , Ukraine',
            id: '4'
        },
        {
            name: 'Dr.Nazariy Andrushchak, Member',
            description: 'CAD Department Lviv, Polytechnic National University, Ukraine',
            id: '5'
        },
        {
            name: 'Dr.Natalia Bokla, Member',
            description: 'CAD Department, Lviv Polytechnic National University, Ukraine',
            id: '6'
        },
        {
            name: 'Dr.Pavlo Denysyuk, Member',
            description: 'CAD Department, Lviv Polytechnic National University, Ukraine',
            id: '7'
        },
        {
            name: 'Dr.Uliana Marikutsa, Member',
            description: 'CAD Department, Lviv Polytechnic National University, Ukraine',
            id: '8'
        },
        {
            name: 'Prof.Vasyl Teslyuk, Member',
            description: 'CAD Department, Lviv Polytechnic National University, Ukraine',
            id: '9'
        },
        {
            name: 'Bsc.Andrii Pavliuk, Member',
            description: 'CAD Department, Lviv Polytechnic National University, Ukraine',
            id: '10'
        },
        {
            name: 'Dr.Ihor Farmaga, Member',
            description: 'CAD Department, Lviv Polytechnic National University, Ukraine',
            id: '11'
        },
        {
            name: 'Bsc.Vitalii Yaremko Member',
            description: 'CAD Department, Lviv Polytechnic National University, Ukraine',
            id: '12'
        },
    ]


    return (
        <FlatList
            style={style.container}
            data={flatList}
            renderItem={({item}) =>
                <View style={style.wrapper}>
                    <Text style={style.name}>
                        {item.name}
                    </Text>
                    <Text style={style.description}>
                        {item.description}
                    </Text>
                </View>
            }
            keyExtractor={item => item.id}

        />
    );
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        height: '75%'
    },
    wrapper: {
        marginBottom: 15,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 7,
    },
    description: {
        fontSize: 18,
    }
})
