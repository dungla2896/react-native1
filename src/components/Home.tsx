import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Animated,
} from 'react-native';
import ImageHeader from '../assets/imageHeader.jpg';
import IconsIonicons from 'react-native-vector-icons/Ionicons';
import IconsFeather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import countryApi from '../api/getAllApi';
import Avatar from '../assets/avatar6.png';

const Home = () => {

    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [toggleHeader, setToggleHeader] = useState(false);

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
                <View style={styles.rowUser} key={index}>
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

    const FlatList_Header = () => {
        return (
            <>
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
            </>
        );
      }

    const renderLoader = () => {
        return (
          isLoading ?
            <View>
                <View style={styles.loaderStyle}>
                    <View style={styles.loading}></View>
                    <View style={styles.loading}></View>
                </View> 
                <View style={styles.loaderStyle}>
                    <View style={styles.loading}></View>
                    <View style={styles.loading}></View>
                </View>  
            </View>: null
        );
    };
    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);
    };
    return (
        <View style={styles.body}>
            {
                toggleHeader && <View style={{ height: 90, zIndex: 10 }}>
                    <View style={styles.showHeader}>
                        <TouchableOpacity style={styles.reset}>
                            <MaterialIcons name='refresh' size={20} />
                            <Text style={{fontSize: 15, fontWeight: '600'}}>Reset</Text>
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Découvrir</Text>
                        <TouchableOpacity style={styles.iconHeader}>
                            <View style={styles.iconsave}>
                                <IconsIonicons name='save-sharp' size={13} color='#24cf5f' />
                            </View>
                            <IconsIonicons name='options-outline' size={18} color='#24cf5f' />
                        </TouchableOpacity>
                    </View>
                </View>
            }
            <FlatList
                data={user}
                renderItem={renderItem}
                ListHeaderComponent={FlatList_Header}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0}
                numColumns={2}
                onScroll={(e) => {
                    setToggleHeader(e.nativeEvent.contentOffset.y > 290 ? true : false);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },
    showHeader: {
        top: 0, 
        backgroundColor: '#fff', 
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        height: 90,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    reset: {
        flexDirection: 'row',
        fontSize: 15,
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
    },
    iconHeader: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    iconsave: {
        borderColor: '#24cf5f',
        borderWidth: 1,
        padding: 5,
        borderRadius: 7,
        marginRight: 10,
    },
    header: {
        width: '100%',
        height: 220,
        justifyContent: 'center',
        backgroundColor: '#0000002e',
        zIndex: -1,
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
        zIndex: -1,
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
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
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
        backgroundColor: '#f3f2f3',
        borderRadius: 12,
        marginLeft: 7,
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
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    loading: {
        backgroundColor: '#dce0e4', 
        width: 170, 
        height: 190, 
        borderRadius: 15
    }
})

export default Home;