import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const User = (props: any) => {
    const { navigation } = props;
    const { push } = navigation;

    const onSubmit = async () => {
        await AsyncStorage.removeItem('access_token')
        push('LoginPage')
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
