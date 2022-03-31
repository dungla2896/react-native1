import React, { useState } from 'react';
import Home from './components/Home';
import LoginPage from './features/signin/pages/LoginPage';
import Index from './features/signup/pages/Index';
import GenderPage from './features/signup/pages/GenderPage';
import Birthday from './features/signup/pages/BirthdayPage';
import OriginPage from './features/signup/pages/OriginPage';
import FromForm from './features/signup/pages/FromForm';
import CountryFrom from './features/signup/pages/CountryPage';
import RegionFrom from './features/signup/pages/RegionPage';
import CityFrom from './features/signup/pages/CitysPage';
import ZipcodeFrom from './features/signup/pages/ZipcodePage';
import SignUpFrom from './features/signup/pages/SignupPage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


// yarn add react-navigation
// yarn add @react-navigation/bottom-tabs
// yarn add @react-navigation/native
// yarn add @react-navigation/native-stack
// yarn add react-native-screens
const App: React.FC = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginPage' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='LoginPage' component={LoginPage} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Index' component={Index} />
                <Stack.Screen name='GenderPage' component={GenderPage} />
                <Stack.Screen name='Birthday' component={Birthday} />
                <Stack.Screen name='OriginPage' component={OriginPage} />
                <Stack.Screen name='FromForm' component={FromForm} />
                <Stack.Screen name='CountryFrom' component={CountryFrom} />
                <Stack.Screen name='RegionFrom' component={RegionFrom} />
                <Stack.Screen name='CityFrom' component={CityFrom} />
                <Stack.Screen name='ZipcodeFrom' component={ZipcodeFrom} />
                <Stack.Screen name='SignUpFrom' component={SignUpFrom} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
