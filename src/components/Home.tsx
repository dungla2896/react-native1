import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';
import ImageHeader from '../assets/imageHeader.jpg';
import IconsIonicons from 'react-native-vector-icons/Ionicons';
import IconsFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconsFontAwesome from 'react-native-vector-icons/FontAwesome';
import Avatar from '../assets/Avatar1.jpeg';

const Home = () => {

    return (
        <View style={styles.body}>
            <ScrollView style={{ marginBottom: 10 }}>
                <ImageBackground source={ImageHeader} style={styles.header} resizeMode='cover'>
                    <View style={styles.container}>
                        <Text style={styles.titleHeader}>Rencontres</Text>
                        <Text style={styles.pld}>Découvrez les profils et faites une rencontre !</Text>
                    </View>
                    <View style={styles.border1}></View>
                    <View style={styles.border2}></View>
                </ImageBackground>
                <View style={styles.conentBtn}>
                    <Text style={styles.textBtn1}>Votre Recherche</Text>
                    <TouchableOpacity style={styles.btn2}>
                        <IconsIonicons name='options-outline' size={18} color='#fff' />
                        <Text style={styles.textBtn2}>Critères</Text>
                        <View style={styles.numberBtn}>
                            <Text style={styles.number}>0</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowUser}>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rowUser}>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rowUser}>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rowUser}>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rowUser}>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rowUser}>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rowUser}>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rowUser}>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys}>Dijon</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.user}>
                        <Image source={Avatar} style={styles.avatar} />
                        <Text style={styles.name}>Sonia20</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>39 ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys} ellipsizeMode='tail' numberOfLines={1} >Dijonasfasfgasgasg</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 220,
        justifyContent: 'center',
        backgroundColor: '#0000002e'
    },
    container: {
        backgroundColor: '#0000002e',
        height: '100%',
        justifyContent: 'center',
    },
    titleHeader: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '700',
        paddingLeft: 30,
    },
    pld: {
        color: '#fff',
        paddingLeft: 30,
    },
    border1: {
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 15,
        borderLeftWidth: 210,
        borderRightWidth: 210,
        borderBottomWidth: 15,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: '#fff',
        borderBottomColor: '#fff',
        opacity: 0.8,
    },
    border2: {
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 15,
        borderLeftWidth: 210,
        borderRightWidth: 210,
        borderBottomWidth: 15,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
        borderLeftColor: '#fff',
        borderRightColor: 'transparent',
        borderBottomColor: '#fff',
        opacity: 0.8,
    },
    conentBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 20,
    },
    textBtn1: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
    },
    btn2: {
        backgroundColor: '#24cf5f',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,
    },
    textBtn2: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 5,
    },
    numberBtn: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 3,
        right: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 5,
    },
    number: {
        color: '#24cf5f',
        fontSize: 11,
    },
    rowUser: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    user: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.11,
        shadowRadius: 1.00,
        elevation: 1,

        padding: 14,
        borderRadius: 10,
        width: 150,
    },
    avatar: {
        height: 120,
        width: 120,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    name: {
        color: '#000',
        fontSize: 14,
        fontWeight: '700',
        marginTop: 10,
        flex: 1,
    },
    oldCity: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    old: {
        color: '#989ca0',
        fontSize: 12,
        fontWeight: '600',
    },
    gach: {
        color: '#e0e1e2',
        marginRight: 3,
        marginLeft: 3,
    },
    map: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    citys: {
        color: '#989ca0',
        fontSize: 12,
        fontWeight: '600',
        width: '55%',
        marginLeft: 3,
    },
})

export default Home;