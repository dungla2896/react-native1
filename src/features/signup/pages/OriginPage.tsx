import React, { useState } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import RadioButton from '../../../components/RadioButton';
import IconPage from '../../../components/IconPage';
import Icons from 'react-native-vector-icons/Entypo';
import ButtonCheck from '../../../components/ButtonCheck';

const OriginPage = () => {
    const [select, setSelect] = useState(0);

    return (
        <View style={styles.content}>
            <IconPage />
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Icons name='map' size={28} color='white' />
                </View>
            </View>
            <Text style={styles.title}>Quel est mon pays d'origine ?</Text>
            <RadioButton 
                option={[ 'Homme', 'Femme']} 
                selected={select}
                onChangeSelect={((opt: any, i:number) => {
                    setSelect(i)
                })}
            />
            <View style={styles.check}>
                <ButtonCheck />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 35,
        alignItems: 'center',
    },
    content: {
        marginTop: 15,
        height: '96%',
        position: 'relative'
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
    }
})
//'linear-gradient(45deg, #FF59F4 0%, #FF5978 100%)', backColor: '#FF5978' }, 
export default OriginPage;
