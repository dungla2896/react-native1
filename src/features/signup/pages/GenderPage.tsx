import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RadioButton from '../../../components/RadioButton';
import IconsFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import ButtonCheck from '../../../components/ButtonCheck';

const GenderPage = (props: any) => {
    const [select, setSelect] = useState(0);

    const { navigation, route } = props;

    //const { navigate, goBack } = navigation;

    return (
        <View style={styles.content}>
            <TouchableOpacity onPress={() => console.log('checkG')}>
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
            <RadioButton 
                option={[ 'Homme', 'Femme']} 
                selected={select}
                onChangeSelect={((opt: any, i:number) => {
                    setSelect(i)
                })}
            />
            <View style={styles.check}>
                {/* <TouchableOpacity 
                    style={styles.checkbtn} 
                    onPress={() => navigate('Birthday')}
                >
                    <View style={styles.btncheck}>
                        <IconFontAwesome name='check' size={18} color='#fff' />
                    </View>
                </TouchableOpacity> */}
                <ButtonCheck />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
