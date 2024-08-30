import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZE } from '../../constants/appearance'
import CustomIconHeader from '../header/CustomIconHeader'
import DefaultPicker from '../picker/DefaultPicker'
import { jenisKriminal } from '../../constants/feature'
import DefaultButton from '../button/DefaultButton'

const FloatModal = ({ show, onRequestClose, onPress, getValue }) => {

    const [selectedValue, setSelectedValue] = useState(null)

    useEffect(()=> {
        if (selectedValue !== null) {
            getValue(selectedValue)
        }
    },[selectedValue])

    const requestingClose = () => {
        Alert.alert('Laporan Akan Dibatalkan', 'Apakah Anda Yakin?', [
            {
                text: 'Tidak',
                style: 'cancel'
            },
            { text: 'Ya', onPress: () => onRequestClose() }
        ])
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={show}
            onRequestClose={requestingClose}
        >
            <View
                style={styles.main}
            >
                <Pressable onPress={requestingClose} style={styles.root} />
                <View style={styles.floatContainer}>
                    <CustomIconHeader onPress={requestingClose} title={'Laporan'} icon={'close'} />
                    <View style={styles.contentContainer}>
                        <DefaultPicker
                            item={jenisKriminal}
                            frontIcon={{ name: 'paper-plane-outline' }}
                            firstItem={'Pilih Jenis Kriminal'}
                            selectedValue={selectedValue}
                            setSelectedValue={(val) => setSelectedValue(val)}
                        />
                        <DefaultButton onPress={onPress} text={'Laporkan'} disabled={selectedValue !== null ? false : true} />
                    </View>
                </View>

            </View>

        </Modal>
    )
}

export default FloatModal

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    root: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    floatContainer: {
        width: '80%',
        backgroundColor: COLORS.white,
        borderRadius: SIZE.normal,
    },
    contentContainer: {
        paddingHorizontal: SIZE.large,
        paddingBottom: SIZE.normal
    }
})