import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconsOcticons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';

import { UserContext } from '../../../../UserContext';

const SignUpFrom = (props: any) => {
    const backgroundColor = ['#FF59F4', '#FF5978'];
    const { navigation } = props;
    const { push, goBack } = navigation;

    // const [email, setEmail] = useState('');
    // const [firstname, setFirstname] = useState('');
    // const [password, setPassword] = useState('');

    const [data, setData] = useState({
        email: '',
        firstname: '',
        password: '',
        check_InputChange: false,
        isValidEmail: true,
        isValidFirstName: true,
        isValidPassword: true,
    });

    const textInputChange = () => {}

    const context = useContext(UserContext);

    return (
        <LinearGradient colors={backgroundColor} style={styles.body} >
            <SafeAreaView>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.header}>
                            <TouchableOpacity 
                                style={styles.leftPage}
                                onPress={() => goBack()}
                            >
                                <IconFontAwesome name='chevron-left' size={15} color='white' style={styles.iconPage} />
                            </TouchableOpacity>
                            <Text style={styles.title}>Inscription</Text>
                            <View style={styles.textLink}>
                                <Text style={styles.text}>Déjà un compte ?</Text>
                            </View>
                        </View>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Email'
                                placeholderTextColor='#ffffff78'
                                keyboardType="email-address"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Prénom'
                                placeholderTextColor='#ffffff78'
                                keyboardType="default"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Mot de Passe'
                                placeholderTextColor='#ffffff78'
                                keyboardType="default"
                            />
                        </View>
                        <View>
                            <TouchableOpacity>
                                <View style={styles.radios}>
                                    <View style={styles.outline}>
                                        <IconsOcticons name='check' size={28} color='#fff' />
                                    </View>
                                    <Text style={styles.text}>
                                        Je certifie être majeur(e) et j’accepte les Conditions générales d’utilisations
                                        {/* <View style={styles.linkBank}>Conditions générales d’utilisations</View> */}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.radios}>
                                    <View style={styles.outline}>
                                        
                                    </View>
                                    <Text style={styles.text}>J'accepte que mes données renseignées, 
                                        y compris celles facultatives relatives à mon origine, à ses prestataires 
                                        et aux autres membres situés dans et hors l’UE afin de favoriser des rencontres
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.btnSubmit}>
                        <TouchableOpacity 
                            style={styles.checkView}
                            onPress={() => push('UITab')}
                        >
                            <View style={styles.btncheck}>
                                <IconsOcticons name='check' size={18} color='#fff' />
                                <Text style={styles.textBtn}>CRÉER MON COMPTE</Text>
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
    content: {
        marginTop: 15,
        height: '100%',
        position: 'relative',
    },
    row: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    leftPage: {
        width: 40,
        paddingBottom: 5,
        paddingTop: 5,
    },
    iconPage: {
    },
    header: {
        marginBottom: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

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
        marginLeft: 75,
    },
    textLink:{
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: '#fff',
    },
    text: {
        color: '#fff',
    },
    textInput: {
        width: '100%',
        borderColor: 'transparent',
        borderWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        paddingBottom: 15,
        marginTop: 10,
        marginBottom: 15,
        fontWeight: '500',
        fontSize: 16,
    },
    radios: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 18,
        marginTop: 15,
        paddingRight: 40,
    },
    outline: {
        width: 40,
        height: 40,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    linkBank: {
        borderBottomWidth: 0.35,
        borderBottomColor: '#fff',
    },
    btnSubmit: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    checkView: {
        position: 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: '#ffffff33',
        paddingTop: 10,
        paddingBottom: 18,
        borderWidth: 1,
        borderColor: 'transparent',
        borderTopColor: '#fff',
    },
    btncheck: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textBtn: {
        color: '#FFF',
        marginLeft: 10,
    }
})

export default SignUpFrom;
