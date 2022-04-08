import React, { useEffect, useState } from 'react';
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
    ActivityIndicator,
    TouchableWithoutFeedback, 
    Keyboard,
} from 'react-native';
import BgImage from '../../../assets/intro-home.jpeg';
import Logo from '../../../assets/logo-large.png';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useAppDispatch, useAppSelector } from '../../../app/hook';
import { signInActions } from '../signinSlice';

const LoginPage = (props: any) => {
    const [showModal, setShowModal] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showPass, setShowPass] = useState(true);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { navigation } = props;
    const { push } = navigation;

    const isLoggedIn = useAppSelector((state) => state.signIn.isLoggedIn);
    const loginFailed = useAppSelector((state) => state.signIn.loginFailed);

    useEffect(() => {
        if(loginFailed === false) {
            setShowMessage(true)
        }
    },[loginFailed])

    useEffect(() => {
        if(isLoggedIn === true){
            setShowModal(false);
            setShowMessage(false);
            push('UITab');
        }
    },[isLoggedIn])

    const dispatch = useAppDispatch();

    const onSubmit = async () => {
        const data = {
            login: userName,
            validitySeconds: 7776000,
            password: password,
        }
        dispatch(signInActions.login(data))
    }
    const isLoading = useAppSelector((state) => state.signIn.logging)

    return (
        <View style={styles.body}>
            <ImageBackground source={BgImage} style={styles.container}  >
                <SafeAreaView>
                    <View style={styles.content}>
                        <Image source={Logo} style={styles.logo} />
                        <Text style={styles.title}>
                            L'application numéro 1 de la rencontre Musulmane et Maghrébine
                        </Text>
                        <View style={styles.btn}>
                            <TouchableOpacity style={styles.btnConnecter} onPress={() => setShowModal(!showModal)}>
                                <Text style={styles.btnText}>SE CONNECTER</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnInscription} onPress={() => push('GenderPage')}>
                                <Text style={styles.btnText}>INSCRIPTION GRATUITE</Text>
                                <Text style={styles.btnText}>EN 1MIN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
                <Modal transparent visible={showModal}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalBackground}>
                            <View style={styles.modalContainer}>
                                <View style={styles.headerLogin}>
                                    <Text style={styles.titleLogin}>Connexion</Text>
                                    <TouchableOpacity style={styles.close} onPress={() => {
                                        setShowModal(!showModal)
                                        setShowMessage(false)
                                    }}>
                                        <IconAntDesign name='close' size={24} color='#000' />
                                    </TouchableOpacity>
                                </View>
                                {
                                    showMessage && <View style={styles.message}>
                                        <Text style={{color: 'red'}}>Identifiant ou mot de passe incorrect</Text>
                                    </View>
                                }
                                <TextInput 
                                    style={styles.inputLogin}
                                    placeholder='Email'
                                    placeholderTextColor='#000'
                                    keyboardType='email-address'
                                    onChangeText={(val) => setUserName(val)}
                                    value={userName}
                                />
                                <View style={styles.inputPass} >
                                    <TextInput 
                                        style={styles.inputLogin}
                                        placeholder='Mot de Passe'
                                        placeholderTextColor='#000'
                                        secureTextEntry={showPass}
                                        onChangeText={(val) => setPassword(val)}
                                        value={password}
                                    />
                                    <TouchableOpacity style={styles.iconShow} onPress={() => setShowPass(!showPass)} >
                                        <IconAntDesign name='eyeo' size={25} color='#7f7f7f' />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.titleLink}>
                                    <TouchableOpacity>
                                        <Text style={styles.titlePass}>Mot de passe oublié ?</Text>
                                    </TouchableOpacity>
                                    <View style={styles.titleLinkHelp}>
                                        <Text style={styles.titleHelp}>Nous contacter ou Aide</Text>
                                    </View>
                                </View>
                                {
                                    isLoading === false ? <TouchableOpacity style={styles.btnSubmit} onPress={onSubmit}>
                                        <Text style={styles.textBtn}>ME CONNECTER</Text>
                                    </TouchableOpacity> :
                                    <View style={styles.btnLoading}>
                                        <ActivityIndicator size="large" color="#000" />
                                    </View>
                                }
                                <View style={styles.signUp}>
                                    <Text style={styles.textSignUp}>Vous n'avez pas de compte?</Text>
                                    <TouchableOpacity onPress={() => {
                                        setShowModal(!showModal)
                                        push('GenderPage');
                                    }}>
                                        <Text style={styles.linkSignUp}>Inscrivez-vous gratuitement</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    logo: {
        height: 40,
        resizeMode: 'contain',
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
        paddingLeft: 45,
        paddingRight: 45,
        fontSize: 16,
    },
    btn: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    btnConnecter: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        justifyContent: 'flex-end',
        height: 40,
    },
    btnInscription: {
        backgroundColor: '#24cf5f',
        padding: 10,
        borderRadius: 10,
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#fff',
        width: '100%',
        paddingLeft: 25,
        paddingRight: 25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    message: {
        backgroundColor: '#fde9e9',
        alignItems: 'center',
        padding: 16,
        borderRadius: 10,
    },
    headerLogin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
    titleLogin: {
        fontSize: 24,
        color: '#000',
        fontWeight: '600'
    },
    close: {
        padding: 4,
    },
    inputLogin: {
        borderColor:'#EAEAEB',
        borderWidth: 1,
        paddingTop: 25,
        paddingLeft: 15,
        paddingBottom: 25,
        marginTop: 30,
        fontWeight: '600',
        fontSize: 15,
        borderRadius: 10,
        width: '100%',
    },
    inputPass: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    iconShow: {
        position: 'absolute',
        right: 10,
        top: 55,
    },
    titleLink: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    titlePass: {
        color: '#24cf5e',
        fontWeight: '600',
        fontSize: 13,
    },
    titleLinkHelp: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#7f7f7f',
    },
    titleHelp: {
        color: '#7f7f7f',
        fontWeight: '600',
        fontSize: 13,
    },
    btnSubmit: {
        marginTop: 30,
        backgroundColor: '#24cf5e',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
    },
    btnLoading: {
        marginTop: 30,
        backgroundColor: '#939eaa',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 15,
        paddingTop: 15,
        borderRadius: 10,
    },
    textBtn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    signUp: {
        marginTop: 30,
        paddingBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textSignUp: {
        color: '#7f7f7f',
        fontSize: 13,
    },
    linkSignUp: {
        color: '#24cf5e',
        fontSize: 13,
    }
})
// headerLogin titleLogin inputLogin titleLink titlePass titHelp
export default LoginPage;
