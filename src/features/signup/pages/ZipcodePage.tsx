import React, { useState } from 'react';
import {
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    SafeAreaView,
    TouchableWithoutFeedback, 
    Keyboard,
} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const ZipcodeFrom = (props: any) => {
    const [select, setSelect] = useState(0);
    const backgroundColor = ['#FF59F4', '#FF5978'];
    const { navigation } = props;
    const { push, goBack } = navigation;

    return (
        <LinearGradient colors={backgroundColor} style={styles.body} >
            <SafeAreaView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View >
                            <TouchableOpacity 
                                style={styles.leftPage}
                                onPress={() => goBack()}
                            >
                                <IconFontAwesome name='chevron-left' size={15} color='white' style={styles.iconPage} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.header}>
                            <View style={styles.logo}>
                                <FontAwesome5 name='city' size={20} color='white' />
                            </View>
                        </View>
                        <Text style={styles.title}>Quel est votre code postal ?</Text>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Code postal ?'
                                placeholderTextColor='#ffffff78'
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.check}>
                            <TouchableOpacity 
                                style={styles.checkView}
                                onPress={() => push('SignUpFrom')}
                            >
                                <View style={styles.btncheck}>
                                    <IconFontAwesome name='check' size={18} color='#fff' />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
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
        marginBottom: 30,
    },
    textInput: {
        width: '100%',
        borderColor: 'transparent',
        borderWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        paddingBottom: 15,
        marginTop: 10,
        fontWeight: '500',
        fontSize: 15,
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

export default ZipcodeFrom;
