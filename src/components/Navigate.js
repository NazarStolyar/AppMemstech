import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {  Entypo, MaterialCommunityIcons, Octicons, FontAwesome } from '@expo/vector-icons';


export const Navigate = ({ onSubmit, onScreen }) => {
    return (
        <View style={style.navigate}>
            <Entypo.Button style={style.button}
                           name='compass'
                           size={30}
                           color={onScreen === 'mainScreen' ? '#00AAFF' : '#4B4B4B'}
                           onPress={() => onSubmit('mainScreen')}>
            </Entypo.Button>
            <MaterialCommunityIcons.Button style={style.button}
                                           name='monitor'
                                           size={30}
                                           color={onScreen === 'agendaScreen' ? '#00AAFF' : '#4B4B4B'}
                                           onPress={() => onSubmit('agendaScreen')}>
            </MaterialCommunityIcons.Button>
            <Octicons.Button style={style.button}
                             name='info'
                             size={30}
                             color={onScreen === 'infoScreen' ? '#00AAFF' : '#4B4B4B'}
                             onPress={() => onSubmit('infoScreen')}>
            </Octicons.Button>
            <FontAwesome.Button style={style.button}
                                name="user-circle-o"
                                size={30}
                                color={onScreen === 'committeScree' ? '#00AAFF' : '#4B4B4B'}
                                onPress={() => onSubmit('committeScree')}>
            </FontAwesome.Button>
        </View>
    );
}

const style = StyleSheet.create({
    navigate: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        borderTopColor: '#C6C6C6',
        borderTopWidth: 1,
        backgroundColor: '#FBFBFB',
        position: 'absolute',
        width: '100%',
        bottom:0,
        left:0,
        flex: 1
    },
    button: {
        backgroundColor: '#FBFBFB',
        textAlign: 'center'
    }
})
