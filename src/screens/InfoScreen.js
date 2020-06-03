import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'

export const InfoScreen = () => {
    const images = [
        {
            link: require('../../assets/info/1.jpg')
        },
        {
            link: require('../../assets/info/2.jpg')
        },
        {
            link: require('../../assets/info/3.jpg')
        },
        {
            link: require('../../assets/info/4.jpg')
        },
        {
            link: require('../../assets/info/5.jpg')
        }
    ]
    return (
        <ScrollView style={style.container}>
            {
                images.map(item => (
                    <View style={style.containerImage}>
                        <Image
                            style={style.image}
                            source={item.link}>
                        </Image>
                    </View>
                ))
            }

        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '75%',
        padding: 20
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: '100%',
    }
})
