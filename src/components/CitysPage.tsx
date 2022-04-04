import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import { UserContext } from '../../UserContext';
import countryApi from '../api/getAllApi';
import { City } from '../models/citys';

const CityFrom = (props: any) => {
    const [select, setSelect] = useState(0);
    const [city, setCity] = useState<City[]>([]);

    const backgroundColor = ['#FF59F4', '#FF5978'];

    const { navigation } = props;
    const { push, goBack } = navigation;

    const context = useContext(UserContext);
    const idCountry = context.idCountry;
    const idRegion = context.idRegion;

    useEffect(() => {
        countryApi.getCity(idCountry, idRegion).then((res) => setCity(res.CONTENT.ALL.cities))
    }, [idCountry, idRegion]);

    return (
        <LinearGradient colors={backgroundColor} style={styles.body} >
            <SafeAreaView>
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
                    <Text style={styles.title}>Quelle est votre ville ?</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            city.map((item: City, index: number) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        setSelect(index);
                                        context.setIdCity(item.id)
                                    }}
                                >
                                    <View style={styles.radios}>
                                        <Text style={styles.text}>{item.name}</Text>
                                        <View style={styles.outline}>
                                            {
                                                select === index && <View style={styles.innerCircle} />
                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                    <View style={styles.check}>
                        <TouchableOpacity 
                            style={styles.checkView}
                            onPress={() => push('ZipcodeFrom')}
                        >
                            <View style={styles.btncheck}>
                                <IconFontAwesome name='check' size={18} color='#fff' />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
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

export default CityFrom;
