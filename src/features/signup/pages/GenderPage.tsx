import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import IconsFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const GenderPage = (props: any) => {
    const [homme, setHomme] = useState(1);
    const [femme, setFemme] = useState(0);
    const [getGender, setGetGender] = useState<number>(1)

    const backgroundColor = ['#FF59F4', '#FF5978']

    const { navigation } = props;
    const { push, goBack } = navigation;

    return (
        <LinearGradient colors={backgroundColor} style={styles.body} >
            <SafeAreaView>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <View>
                            <IconsFontAwesome name='chevron-left' size={15} color='white' style={styles.iconPage} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <View style={styles.logo}>
                            <IconsFontAwesome name='venus-mars' size={20} color='white' />
                        </View>
                    </View>
                    <Text style={styles.title}>Vous êtes :</Text>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setHomme(1);
                                setFemme(0);
                                setGetGender(1)
                            }}
                        >
                            <View style={styles.radios}>
                                <Text style={styles.text}>Homme</Text>
                                <View style={styles.outline}>
                                    {
                                        homme === 1  && <View style={styles.innerCircle} />
                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setHomme(0);
                                setFemme(1);
                                setGetGender(2);
                            }}
                        >
                            <View style={styles.radios}>
                                <Text style={styles.text}>Femme</Text>
                                <View style={styles.outline}>
                                    {
                                        femme === 1  && <View style={styles.innerCircle} />
                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.check}>
                        <TouchableOpacity 
                            style={styles.checkbtn} 
                            onPress={() => push('Birthday')}
                        >
                            <View style={styles.btncheck}>
                                <IconFontAwesome name='check' size={18} color='#fff' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    iconPage: {
        width: '15%',
        position: 'relative',
        top: 15,
    },
    header: {
        marginBottom: 35,
        alignItems: 'center',
        zIndex: -1,
    },
    content: {
        marginTop: 15,
        height: '96%',
        position: 'relative',
        paddingLeft: 30,
        paddingRight: 30,
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
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    checkbtn: {
        position: 'relative',
        bottom: 0
    },
    btncheck: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
//'linear-gradient(45deg, #FF59F4 0%, #FF5978 100%)', backColor: '#FF5978' }, 
export default GenderPage;
