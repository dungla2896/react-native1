import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';

interface Props {
    visible: boolean;
    year: string;
}

const AlertBirthdays: any = (props: Props) => {
    const { visible, year } = props;
    const [showModal, setShowModal] = useState(visible);
    let yearday = new Date().getFullYear();
    const old = `Vous avez ${yearday - Number(year)} ans`;

    const toggModal = () => {
        if(visible){
            setShowModal(true);
        }else {
            setShowModal(false);
        }
    }

    useEffect(() => {
        toggModal();
    },[visible])

    return (
        <Modal transparent visible={showModal} >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Icons name='birthday-cake' size={28} color='black' style={styles.icon} />
                    <Text style={styles.old}>{old}</Text>
                    <Text style={styles.def}>Vous ne pourrez pas le modifier par la suite</Text>
                    <View style={styles.rowBtn}>
                        <TouchableOpacity onPress={() => setShowModal(false)}>
                            <View style={styles.btnAnnuler}>
                                <Text style={styles.btn1}>ANNULER</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.btnConfirmer}>
                                <Text style={styles.btn2}>CONFIRMER</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#fff',
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    icon: {
        marginTop: 25,
    },
    old: {
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 10,
    },
    def: {
        color: '#3e3e3e',
        marginTop: 10,
    },
    rowBtn: {
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 25,
        justifyContent: 'space-around',
        width: '100%',
    },
    btnAnnuler: {
        backgroundColor: '#f6f6f6',
        width: 110,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    btn1: {
        color: '#3e3e3e',
        fontWeight: '600',
    },
    btnConfirmer: {
        backgroundColor: '#24cf5f',
        width: 110,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    btn2: {
        color: '#fff',
        fontWeight: '600',
    },
})

export default AlertBirthdays;
