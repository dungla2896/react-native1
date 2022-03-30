import React from 'react';
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

    const backgroundColor = ['#FF59F4', '#FF5978']

    return (
        <LinearGradient colors={backgroundColor} style={styles.body} >
            <SafeAreaView>
                <View>
                    <GenderPage />
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
})

export default Index;