import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';

const LogoPage = (props: any) => {
    const { nameIcon } = props;

    return (
        <View style={styles.content}>
            <Icons name='venus-mars' size={28} color='white' />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#f97aec',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 50,
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default LogoPage;
