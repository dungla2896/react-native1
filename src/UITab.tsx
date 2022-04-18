import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, BackHandler } from 'react-native';
import Home from './components/Home';
import Gender from './components/Gender';
import Chat from './components/Chat';
import Bell from './components/Bell';
import User from './components/User';

import IconsIonicons from 'react-native-vector-icons/Ionicons';
import IconsFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconsFontAwesome from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const UITab = () => {
    const screenOptions = {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: '#fff',
            shadowOpacity: 0.1,
            shadowRadius: 2,
            shadowOffset: {
                width: 0,
                height: -1,
            },
            shadowColor: '#000000',
            elevation: 4,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            height: 80
        }
    }

    return (
        <Tab.Navigator 
            screenOptions={screenOptions}
        >
            <Tab.Screen name='Home' component={Home} options={{
                tabBarButton: (props) => {
                    const { onPress, accessibilityState } = props;
                    const focused = accessibilityState?.selected;
                    return (
                        (
                            <TouchableOpacity style={focused ? styles.menuActive : styles.menu} onPress={onPress} >
                                <IconFontisto name='search' size={22} color={focused ? '#000' : '#939eaa'} />
                            </TouchableOpacity>
                        )
                    )
                }
            }} />
            <Tab.Screen name='Gender' component={Gender} options={{
                tabBarButton: (props) => {
                    const { onPress, accessibilityState } = props;
                    const focused = accessibilityState?.selected;
                    return (
                        (
                            <TouchableOpacity style={focused ? styles.menuActive : styles.menu} onPress={onPress} >
                                <IconsFontAwesome name='venus-mars' size={22} color={focused ? '#000' : '#939eaa'} />
                            </TouchableOpacity>
                        )
                    )
                }
            }}/>
            <Tab.Screen name='Chat' component={Chat} options={{
                tabBarButton: (props) => {
                    const { onPress, accessibilityState } = props;
                    const focused = accessibilityState?.selected;
                    return (
                        (
                            <TouchableOpacity style={focused ? styles.menuActive : styles.menu} onPress={onPress} >
                                <IconsIonicons name='chatbubble-ellipses-outline' size={22} color={focused ? '#000' : '#939eaa'} />
                            </TouchableOpacity>
                        )
                    )
                }
            }} />
            <Tab.Screen name='Bell' component={Bell} options={{
                tabBarButton: (props) => {
                    const { onPress, accessibilityState } = props;
                    const focused = accessibilityState?.selected;
                    return (
                        (
                            <TouchableOpacity style={focused ? styles.menuActive : styles.menu} onPress={onPress} >
                                <IconFontisto name='bell' size={22} color={focused ? '#000' : '#939eaa'} />
                            </TouchableOpacity>
                        )
                    )
                }
            }} />
            <Tab.Screen name='User' component={User} options={{
                tabBarButton: (props) => {
                    const { onPress, accessibilityState } = props;
                    const focused = accessibilityState?.selected;
                    return (
                        (
                            <TouchableOpacity style={focused ? styles.menuActive : styles.menu} onPress={onPress} >
                                <IconsFeather name='user' size={22} color={focused ? '#000' : '#939eaa'} />
                            </TouchableOpacity>
                        )
                    )
                }
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    menuActive: {
        padding: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#24cf5f',
        
    },
    menu: {
        padding: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})

export default UITab;
