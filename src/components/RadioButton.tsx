import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = (props: any) => {
    const { option = [], selected, onChangeSelect } = props;
    return (
        <View>
            {
                option.map((opt: any, index: number) => (
                    <TouchableOpacity key={index} onPress={() => onChangeSelect(opt, index)}>
                        <View style={styles.radios}>
                            <Text style={styles.text}>{opt}</Text>
                            <View style={styles.outline}>
                                {selected === index && <View style={styles.innerCircle} />}
                            </View>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    radios: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 20,
        marginTop: 15,
        borderBottomWidth: 0.35,
        borderBottomColor: '#fff',
    },
    outline: {
        width: 22,
        height: 22,
        borderRadius: 15,
        borderColor: '#fff',
        borderWidth: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    text: {
        color: '#fff',
        fontWeight: '600',
    },
})
export default RadioButton;