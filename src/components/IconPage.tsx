import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconPage1 = () => {
    return (
        <View>
            <Icon name='chevron-left' size={15} color='white' style={styles.iconPage} />
        </View>
    )
}

const styles = StyleSheet.create({
    iconPage: {
        width: '15%',
        position: 'relative',
        top: 15,
    }
})

export default IconPage1;
