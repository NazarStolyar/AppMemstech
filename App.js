import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {CommitteScreen} from "./src/screens/CommitteScreen";
import {InfoScreen} from "./src/screens/InfoScreen";
import {AgendaScreen} from "./src/screens/AgendaScreen";
import {Navigate} from "./src/components/Navigate";


export default function App() {
    const [screen, chengeScreen] = useState('mainScreen');

    let content = (
        <MainScreen/>
    )

    if (screen === 'mainScreen') {
        content =  <MainScreen/>
    } else if (screen === 'committeScree') {
        content =  <CommitteScreen/>
    } else if (screen === 'infoScreen') {
        content =  <InfoScreen/>
    } else if (screen === 'agendaScreen') {
        content = <AgendaScreen/>
    }
    return (
        <View style={styles.container}>
            <Navbar/>
            <View style={styles.screen}>
                {content}
            </View>
            <Navigate onScreen={screen} onSubmit={(title) => {
                chengeScreen(title)
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});
