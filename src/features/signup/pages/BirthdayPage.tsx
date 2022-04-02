import React, { useEffect, useRef, useState, useContext } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import IconsFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import { UserContext } from '../../../../UserContext';

const Birthday = (props: any) => {
    const [day, onChangeDay] = useState('');
    const [month, onChangeMonth] = useState('');
    const [year, onChangeYaer] = useState('');

    const [showModal, setShowModal] = useState(false);

    const [showError, setShowError] = useState(false)

    const monthRef = useRef<any>();
    const yearRef = useRef<any>();

    const backgroundColor = ['#FF59F4', '#FF5978'];

    const onChangeValDay = (e: string) => {
        if(Number(e) > 31) {
            return onChangeDay('3')
        }
        switch(e) {
            case '4':
                return onChangeDay('04')
            case '5':
                return onChangeDay('05')
            case '6':
                return onChangeDay('06')
            case '7':
                return onChangeDay('07')
            case '8':
                return onChangeDay('08')
            case '9':
                return onChangeDay('09')
            default:
                return onChangeDay(e)
        }
    }

    const onChangeValMonth = (e: string) => {
        if(Number(e) > 12) {
            return onChangeMonth('1')
        }
        switch(e) {
            case '2':
                return onChangeMonth('02')
            case '3':
                return onChangeMonth('03')
            case '4':
                return onChangeMonth('04')
            case '5':
                return onChangeMonth('05')
            case '6':
                return onChangeMonth('06')
            case '7':
                return onChangeMonth('07')
            case '8':
                return onChangeMonth('08')
            case '9':
                return onChangeMonth('09')
            default:
                onChangeMonth(e)
        }
    }

    useEffect(() => {
        if(day.length === 2){
            if(month.length < 2) {
                monthRef.current.focus();
            }
        }
        if(month.length === 2){
            if(year.length < 4){
                yearRef.current.focus();
            }
        }
    },[day, month]);

    const birthdays = `${year}-${month}-${day}`;
    let yearday = new Date().getFullYear();
    const old = `Votre âge est ${yearday - Number(year)} ans. Vous ne pourrez pas modifier votre âge par la suite.`;

    const oldModal = `Votre âge est ${yearday - Number(year)} ans.`

    let messageError = ''

    if(day === '' || month === '' || year === ''){
        messageError = 'Le champ est vide'
    }else if(day === '0' || month === '0' || year.length < 4) {
        messageError = 'Vous devez mettre une date valide';
    }
    

    const onClickBirthday = () => {
        if(birthdays.length < 10) {
            setShowError(true);
            setShowModal(false)
            setTimeout(() => {
                setShowError(false);
            },2000);
        }else {
            setShowModal(!showModal)
        }
    }

    const context = useContext(UserContext);

    useEffect(() => {
        if(birthdays.length === 10){
            context.setBirthday(birthdays);
        }
    },[birthdays]);

    const { navigation } = props;
    const { push, goBack } = navigation;

    return (
        <LinearGradient colors={backgroundColor} style={styles.body} >
            <SafeAreaView>
                {
                    showError && <View style={styles.message}>
                        <Text style={styles.textMessage}>{messageError}</Text>
                    </View>
                }
                <View style={styles.content}>
                <View style={{ height: '100%'}}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <View>
                            <IconFontAwesome name='chevron-left' size={15} color='white' style={styles.iconPage} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <View style={styles.logo}>
                            <IconsFontAwesome5 name='birthday-cake' size={20} color='#fff' />
                        </View>
                    </View>
                    <Text style={styles.title}>Quelle est votre date de naissance ?</Text>
                    <View style={styles.birthday}>
                        <TextInput 
                            style={styles.input}
                            autoFocus={true}
                            onChangeText={onChangeValDay}
                            value={day}
                            placeholder="JJ"
                            placeholderTextColor={'#ccc'}
                            maxLength={2}
                            keyboardType="numeric"
                        />
                        <Text style={styles.socj}>/</Text>
                        <TextInput 
                            style={styles.input}
                            ref={monthRef}
                            onChangeText={onChangeValMonth}
                            value={month}
                            placeholder="MM"
                            placeholderTextColor={'#ccc'}
                            maxLength={2}
                            keyboardType="numeric"
                        />
                        <Text style={styles.socj}>/</Text>
                        <TextInput 
                            style={styles.inputYear}
                            ref={yearRef}
                            onChangeText={(val) => onChangeYaer(val)}
                            value={year}
                            placeholder="AAAA"
                            placeholderTextColor={'#ccc'}
                            maxLength={4}
                            keyboardType="numeric"
                        />
                    </View>
                    {
                        birthdays.length === 10 ? <Text style={styles.messageOld}>{old}</Text> : <Text></Text> 
                    }
                    <View style={styles.check}>
                        <TouchableOpacity 
                            style={styles.checkbtn} 
                            onPress={onClickBirthday}
                        >
                            <View style={styles.btncheck}>
                                <IconFontAwesome name='check' size={18} color='#fff' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal transparent visible={showModal} >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <IconsFontAwesome5 name='birthday-cake' size={28} color='black' style={styles.icon} />
                            <Text style={styles.old}>{oldModal}</Text>
                            <Text style={styles.def}>Vous ne pourrez pas le modifier par la suite</Text>
                            <View style={styles.rowBtn}>
                                <TouchableOpacity onPress={() => setShowModal(false)}>
                                    <View style={styles.btnAnnuler}>
                                        <Text style={styles.btn1}>ANNULER</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => {
                                        push('OriginPage');
                                        setShowModal(false);
                                    }}
                                >
                                    <View style={styles.btnConfirmer}>
                                        <Text style={styles.btn2}>CONFIRMER</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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
    message: {
        backgroundColor: 'red',
        width: '100%',
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 99,
    },
    textMessage: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 22
    },
    header: {
        marginBottom: 50,
        alignItems: 'center',
        zIndex: -1,
    },
    content: {
        marginTop: 30,
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
    },
    birthday: {
        flexDirection: 'row',
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 45,
        width: 50,
        paddingBottom: 10,
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        borderWidth: 2,
        borderBottomColor: '#fff',
        borderColor: 'transparent'
    },
    inputYear: {
        height: 45,
        width: 60,
        paddingBottom: 10,
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        borderWidth: 2,
        borderBottomColor: '#fff',
        borderColor: 'transparent'
    },
    socj: {
        marginLeft: 15,
        marginRight: 15,
        color: '#fff',
        fontSize: 18
    },
    messageOld: {
        color: '#fff',
        marginTop: 20,
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
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#fff',
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    icon: {
        marginTop: 25,
    },
    old: {
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 10,
    },
    def: {
        color: '#3e3e3e',
        marginTop: 10,
    },
    rowBtn: {
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 25,
        justifyContent: 'space-around',
        width: '100%',
    },
    btnAnnuler: {
        backgroundColor: '#f6f6f6',
        width: 110,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    btn1: {
        color: '#3e3e3e',
        fontWeight: '600',
    },
    btnConfirmer: {
        backgroundColor: '#24cf5f',
        width: 110,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    btn2: {
        color: '#fff',
        fontWeight: '600',
    },
})

export default Birthday;
