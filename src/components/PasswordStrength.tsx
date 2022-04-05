import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, SafeAreaView, Alert, } from 'react-native';
import { score } from 'react-native-zxcvbn';

interface Strength {
    _U: number,
    _V: number,
    _W: number,
    _X: number,
}

const PasswordStrength: any = async (props : any) => {
    const { password } = props;
    const strength: any = await score(`${password}`);
    //console.log(strength._V);
    console.log(password)

    const changePasswordColor = () => ({
        width: '14%', 
        backgroundColor: 'red', 
        height: 5,
    })
    return (
        <View style={changePasswordColor()}>
            
        </View>
    )
}

export default PasswordStrength;
