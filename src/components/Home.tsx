import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import ImageHeader from '../assets/imageHeader.jpg';
import IconsIonicons from 'react-native-vector-icons/Ionicons';
import IconsFeather from 'react-native-vector-icons/Feather';
import countryApi from '../api/getAllApi';
import Avatar from '../assets/avatar6.png';

const Home = () => {

    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        countryApi.getUser(currentPage).then((res) => {
            setUser([...user, ...res.CONTENT.USERS])
            setIsLoading(false)
        })
    },[currentPage])

    const renderItem = (props: any) => {
        const { item, index } = props;
        return (
            <>
                <View style={styles.rowUser}>
                    <View style={styles.user}>
                        {
                            item.thumbnail === null ? <Image source={Avatar} style={styles.avatar} /> :
                            <Image source={{ uri: `${item.thumbnail}` }} style={styles.avatar} />
                        }
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.oldCity}>
                            <Text style={styles.old}>{item.age} ans</Text>
                            <Text style={styles.gach}>|</Text>
                            <View style={styles.map}>
                                <IconsFeather name='map-pin' size={15} color='#989ca0' />
                                <Text style={styles.citys} ellipsizeMode='tail' numberOfLines={1}>{item.city}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    const renderLoader = () => {
        return (
          isLoading ?
            <View style={styles.loaderStyle}>
              <ActivityIndicator size="large" color="#aaa" />
            </View> : null
        );
    };

    console.log(user)
    const loadMoreItem = () => {
        //setCurrentPage(currentPage + 1);
    };
    return (
        <View style={styles.body}>
            {/* <ScrollView style={{ marginBottom: 10 }}> */}
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
            <FlatList
                data={user}
                renderItem={renderItem}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0}
                numColumns={2}
            />
            {/* <View style={styles.rowUser}>
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
                </View> */}
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
        // marginTop: 20,
        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
        flex: 1,
        alignItems: 'center',
        marginTop: 20
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
        width: 170,
    },
    avatar: {
        height: 130,
        width: 130,
        resizeMode: 'contain',
        borderRadius: 10,
        marginLeft: 7,
        backgroundColor: '#f3f2f3',
    },
    name: {
        color: '#000',
        fontSize: 14,
        fontWeight: '700',
        marginTop: 15,
        flex: 1,
        marginLeft: 7,
    },
    oldCity: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 7,
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
        width: '60%',
        marginLeft: 3,
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
    },
})

export default Home;