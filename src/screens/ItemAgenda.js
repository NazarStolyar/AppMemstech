import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native'


export const ItemAgenda = ({Agenda, backToAgenda}) => {
    return (
        <View>
            <Text>Single Agenda</Text>
            <Button onPress={backToAgenda} title='Back'/>
        </View>
    )
}
