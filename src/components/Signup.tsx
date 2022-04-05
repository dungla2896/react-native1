import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, SafeAreaView, Alert, } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconsOcticons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import * as Yup from 'yup';

import PasswordStrength from './PasswordStrength';

import { UserContext } from '../../UserContext';
import { useAppDispatch } from '../app/hook';
import { userActions } from '../features/signup/signupSlice';
import { Username } from '../models/username';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { singUpUser } from '../api/signUpApi';
import userApi from '../api/postApi';

interface User {
    email: string;
    firstname: string, 
    password: string
}

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('L\'adresse email n\'est pas valide').required('Ce champ est requis'),
    firstname: Yup.string().min(3, 'Prénom au moins 3 caractères').required('Ce champ est requis'),
    password: Yup.string().min(8, 'Mot de passe au moins 8 caractères').required('Ce champ est requis'),
});

const SignUpFrom = (props: any) => {
    
    const backgroundColor = ['#FF59F4', '#FF5978'];
    const { navigation } = props;
    const { push, goBack } = navigation;

    const [checkInput1, setCheckInput1] = useState(false);
    const [checkInput2, setCheckInput2] = useState(false);

    const [messageCheck, setMessageCheck] = useState(true);

    const context = useContext(UserContext);
    
    const dispatch = useAppDispatch();

    const onSubmit = (values: User) => {
        const data: Username = {
            gender: context.gender,
            birthday: context.birthday,
            origin: context.origin,
            geoname_id: context.idCity,
            affiliate: 1,
            mailing: 1,
            firstname: values.firstname,
            email: values.email,
            password: values.password,
        }
        //dispatch(userActions.signup(data));

        if(checkInput1 === false || checkInput2 === false){
            setMessageCheck(false)
        }else {
            setMessageCheck(true)
            dispatch(userActions.signup(data))
            //push('UITab')
        }
    }

    console.log(AsyncStorage.getItem('access_token').then((val) => val))

    // AsyncStorage.getItem('User').then((value) => value)

    return (
        <LinearGradient colors={backgroundColor} style={styles.body} >
            <SafeAreaView>
                <Formik
                    initialValues={{ email: '', firstname: '', password: '', check: true }}
                    onSubmit={values => onSubmit(values)}
                    validationSchema={SignupSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
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
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                    />
                                    {errors.email && touched.email ? (
                                        <Text style={{color: 'red'}}>{errors.email}</Text>
                                    ) : null}
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder='Prénom'
                                        placeholderTextColor='#ffffff78'
                                        keyboardType="default"
                                        onChangeText={handleChange('firstname')}
                                        onBlur={handleBlur('firstname')}
                                        value={values.firstname}
                                    />
                                    {errors.firstname && touched.firstname ? (
                                        <Text style={{color: 'red'}}>{errors.firstname}</Text>
                                    ) : null}
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder='Mot de Passe'
                                        placeholderTextColor='#ffffff78'
                                        keyboardType="default"
                                        secureTextEntry={true}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                    />
                                    
                                    {errors.password && touched.password ? (
                                        <Text style={{color: 'red'}}>{errors.password}</Text>
                                    ) : null}
                                </View>
                                <View>
                                    <TouchableOpacity 
                                        onPress={() => {
                                            setCheckInput1(!checkInput1)
                                        }}
                                    >
                                        <View style={styles.radios}>
                                            <View style={styles.outline}>
                                                {
                                                    checkInput1 && <IconsOcticons name='check' size={28} color='#fff' />
                                                }
                                            </View>
                                            <Text style={styles.text}>
                                                Je certifie être majeur(e) et j’accepte les Conditions générales d’utilisations
                                                {/* <View style={styles.linkBank}>Conditions générales d’utilisations</View> */}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setCheckInput2(!checkInput2)}>
                                        <View style={styles.radios}>
                                            <View style={styles.outline}>
                                                {
                                                    checkInput2 && <IconsOcticons name='check' size={28} color='#fff' />
                                                }
                                            </View>
                                            <Text style={styles.text}>J'accepte que mes données renseignées, 
                                                y compris celles facultatives relatives à mon origine, à ses prestataires 
                                                et aux autres membres situés dans et hors l’UE afin de favoriser des rencontres
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    {
                                        messageCheck === false ? (
                                            <Text style={{color: 'red'}}>Ce champ est requis</Text>
                                        ): null
                                    }
                                </View>
                            </View>
                            <View style={styles.btnSubmit}>
                                <TouchableOpacity 
                                    style={styles.checkView}
                                    onPress={() => {
                                        // if(messageCheck === true){
                                        //     push('UITab')
                                        // }
                                        handleSubmit()
                                    }}
                                >
                                    <View style={styles.btncheck}>
                                        <IconsOcticons name='check' size={18} color='#fff' />
                                        <Text style={styles.textBtn}>CRÉER MON COMPTE</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </SafeAreaView>
        </LinearGradient>
        
    )
}

const styles = StyleSheet.create({

    streng: {
        width: '14%', 
        backgroundColor: 'red', 
        height: 5,
    },
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
