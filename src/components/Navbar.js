import React from 'react'
import {Text, StyleSheet, Image, View} from 'react-native'


export const Navbar = (props) => {
    return (
        <View style={style.navbar}>
            <Image
                source={
                    require('../../assets/logo.png')
                }
            >
            </Image>
            <Text style={style.title}>Memstech</Text>
        </View>
    );
}
const style = StyleSheet.create({
    navbar: {
        backgroundColor: '#FBFBFB',
        height: 100,
        padding: 10,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomColor: '#C6C6C6',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        paddingLeft: 15
    }
})


