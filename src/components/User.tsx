import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAppDispatch } from '../app/hook';
import { signInActions } from '../features/signin/signinSlice';
import { userActions } from '../features/signup/signupSlice';

const User = () => {

    const dispatch = useAppDispatch();

    const onSubmit = async () => {
        dispatch(signInActions.logout())
        dispatch(userActions.logout())
        await AsyncStorage.removeItem('access_token')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnLogout} onPress={onSubmit}>
                <Text style={styles.textBtn}>LogOut</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
    },
    btnLogout: {
        width: 100,
        height: 50,
        backgroundColor: '#24cf5f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textBtn:{
        color: '#fff',
        fontWeight: '700'
    }
})

export default User;
