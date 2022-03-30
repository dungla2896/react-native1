import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const CountryFrom = () => {
    const [select, setSelect] = useState(0);

    return (
        <View style={styles.content}>
            <View >
                <TouchableOpacity style={styles.leftPage}>
                    <IconFontAwesome name='chevron-left' size={15} color='white' style={styles.iconPage} />
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <IconEntypo name='map' size={20} color='white' />
                </View>
            </View>
            <Text style={styles.title}>Quel est votre pays ?</Text>
            <Text style={styles.textPay}>Un seul choix possible</Text>
            <View>
                <TouchableOpacity>
                    <View style={styles.radios}>
                        <Text style={styles.text}>Dungasd</Text>
                        <View style={styles.outline}>
                            <View style={styles.innerCircle} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.radios}>
                        <Text style={styles.text}>Aungasd</Text>
                        <View style={styles.outline}>
                            
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.check}>
                <TouchableOpacity style={styles.checkView}>
                    <View style={styles.btncheck}>
                        <IconFontAwesome name='check' size={18} color='#fff' />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    leftPage: {
        height: 40,
        width: '15%',
        position: 'absolute',
        top: 0,
        zIndex: 10,
    },
    iconPage: {
        width: '100%',
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
    },
    textPay: {
        textAlign: 'center',
        color: '#fff',
        marginTop: 10,
        marginBottom: 30,
        fontSize: 12,
        fontWeight: '500',
    },
    radios: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 18,
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
        fontSize: 15
    },
    check: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
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

export default CountryFrom;
