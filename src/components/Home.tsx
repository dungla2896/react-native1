import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    TextInput,
    FlatList,
} from 'react-native';
import ImageHeader from '../assets/imageHeader.jpg'

const Home = () => {
    return (
        <View style={styles.body}>
           <ImageBackground source={ImageHeader} style={styles.header} resizeMode='cover'>
                <View style={styles.container}>
                    <Text style={styles.titleHeader}>Rencontres</Text>
                    <Text style={styles.pld}>Découvrez les profils et faites une rencontre !</Text>
                </View>
            </ImageBackground>
            <View>
                <Text>Bala</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        backgroundColor: '#0000002e'
    },
    container: {
        backgroundColor: '#0000002e',
        height: '100%',
        justifyContent: 'center',
    },
    titleHeader: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '700',
        paddingLeft: 30,
    },
    pld: {
        color: '#fff',
        paddingLeft: 30,
    },
})

export default Home;
