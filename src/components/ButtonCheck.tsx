import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

interface Props {
    showModal: any,
    visible: boolean;
}

const ButtonCheck: any = (props: Props) => {
    const { showModal, visible } = props;
    return (
        <TouchableOpacity style={styles.checkView}>
            <View style={styles.btncheck}>
                <Icon name='check' size={18} color='#fff' />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkView: {
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
    }
})

export default ButtonCheck
