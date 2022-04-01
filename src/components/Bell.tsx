import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Bell = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity >
                <Text>Bell</Text>
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
})

export default Bell;
