import React, { useState } from 'react';
import LoginPage from './features/signin/pages/LoginPage';
// import GenderPage from './features/signup/pages/GenderPage';
// import Birthday from './features/signup/pages/BirthdayPage';
// import OriginPage from './features/signup/pages/OriginPage';
// import FromForm from './features/signup/pages/FromForm';
// import CountryFrom from './features/signup/pages/CountryPage';
// import RegionFrom from './features/signup/pages/RegionPage';
// import CityFrom from './features/signup/pages/CitysPage';
// import ZipcodeFrom from './features/signup/pages/ZipcodePage';
// import SignUpFrom from './components/SignUp';
import GenderPage from './components/GenderPage';
import Birthday from './components/BirthdayPage';
import OriginPage from './components/OriginPage';
import FromPage from './components/FromForm';
import CountryFrom from './components/CountryPage';
import RegionFrom from './components/RegionPage';
import CityFrom from './components/CitysPage';
import ZipcodeFrom from './components/ZipcodePage';
import SignUpFrom from './components/Signup';

import UITab from './UITab';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginPage' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='LoginPage' component={LoginPage} />
                <Stack.Screen name='UITab' component={UITab} />
                <Stack.Screen name='GenderPage' component={GenderPage} />
                <Stack.Screen name='Birthday' component={Birthday} />
                <Stack.Screen name='OriginPage' component={OriginPage} />
                <Stack.Screen name='FromForm' component={FromPage} />
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
