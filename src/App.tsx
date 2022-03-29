/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TextInput,
} from 'react-native';
import GenderPage from './features/signup/pages/GenderPage';
import LinearGradient from 'react-native-linear-gradient';
import Birthday from './features/signup/pages/BirthdayPage';
import OriginPage from './features/signup/pages/OriginPage';

const App: React.FC = () => {

    const backgroundColor = ['#FF59F4', '#FF5978']

    return (
        <LinearGradient colors={backgroundColor} style={styles.body} >
            <SafeAreaView>
                <View style={styles.row}>
                    <OriginPage />
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    row: {
        paddingLeft: 30,
        paddingRight: 30
    }
})

export default App;
