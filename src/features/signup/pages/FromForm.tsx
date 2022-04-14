import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconsFeather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const FromPage = (props: any) => {
    const backgroundColor = ['#FF59F4', '#FF5978'];
    const { navigation } = props;
    const { push, goBack } = navigation;
    const [nextPage, setNextPage] = useState(true);

    const onSubmit = () => {
        setNextPage(false)
        push('CountryFrom')
        setTimeout(function() {
            setNextPage(true)
        }, 2000);
    }

    return (
        <LinearGradient colors={backgroundColor} style={styles.body} >
            <SafeAreaView style={styles.container}>
                <TouchableOpacity 
                    style={styles.leftPage}
                    onPress={() => goBack()}
                >
                    <IconFontAwesome name='chevron-left' size={15} color='white' style={styles.iconPage} />
                </TouchableOpacity>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <IconsFeather name='map-pin' size={20} color='white' />
                    </View>
                </View>
                <View style={{ flex: 8 }}>
                    <Text style={styles.title}>Où habitez-vous ?</Text>
                    <TouchableOpacity 
                        style={styles.btnFrom}
                        onPress={onSubmit}
                    >
                        <Text style={styles.textBtn}>Ma localisation</Text>
                    </TouchableOpacity>
                    <View style={styles.Geolocation}>
                        <IconsFeather name='map-pin' size={15} color='white' />
                        <Text style={styles.textGeolocation}>Me géolocaliser ?</Text>
                    </View>
                </View>
                <View style={styles.check}>
                    {
                        nextPage === true ? <TouchableOpacity 
                            style={styles.checkView}
                            onPress={onSubmit}
                        >
                            <View style={styles.btncheck}>
                                <IconFontAwesome name='check' size={18} color='#fff' />
                            </View>
                        </TouchableOpacity>:
                            <TouchableOpacity style={styles.checkView}>
                            <View style={styles.btncheck}>
                                <IconFontAwesome name='check' size={18} color='#fff' />
                            </View>
                        </TouchableOpacity>
                    }
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    leftPage: {
        height: 40,
        width: '15%',
        position: 'absolute',
        top: '5%',
        zIndex: 10,
    },
    iconPage: {
        width: '100%',
        top: 15,
    },
    container: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
    },
    header: {
        flex: 1,
        marginTop: 20,
        marginBottom: 35,
        alignItems: 'center',
        zIndex: -1,
    },
    logo: {
        backgroundColor: '#f97aec',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 50,
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 40,
    },
    btnFrom: {
        borderBottomColor: '#fff', 
        borderWidth: 1, 
        borderColor: 'transparent',
        paddingBottom: 10,
    },
    textBtn: {
        width: '100%',
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    Geolocation: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    textGeolocation: {
        color: '#fff',
        marginLeft: 8,
        fontWeight: '600',
    },
    radios: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 18,
        marginTop: 15,
        borderBottomWidth: 0.35,
        borderBottomColor: '#fff',
    },
    outline: {
        width: 22,
        height: 22,
        borderRadius: 15,
        borderColor: '#fff',
        borderWidth: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    text: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15
    },
    check: {
        flex: 1,
        alignItems: 'center',
    },
    checkView: {
        flex: 1,
    },
    btncheck: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
//'linear-gradient(45deg, #FF59F4 0%, #FF5978 100%)', backColor: '#FF5978' }, 
export default FromPage;
