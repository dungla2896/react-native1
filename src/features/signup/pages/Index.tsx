import React, { createContext, useState } from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import GenderPage from './GenderPage';
import LinearGradient from 'react-native-linear-gradient';
import Birthday from './BirthdayPage';
import OriginPage from './OriginPage';
import FromPage from './FromForm';
import CountryFrom from './CountryPage';
import RegionFrom from './RegionPage';
import CityFrom from './CitysPage';
import ZipcodeFrom from './ZipcodePage';
import SignUpFrom from './SignupPage';

const Index: React.FC = () => {

    const [idOrigins, setIdOrigins] = useState<number>(0);
    
    console.log(idOrigins);

    return (
        <>
            
        </>
    );
};

export default Index;