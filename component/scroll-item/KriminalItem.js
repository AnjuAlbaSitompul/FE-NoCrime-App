import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZE } from '../../constants/appearance'
import { jenisKriminal } from '../../constants/feature'
import dateTranslate from '../../util/dateTranslate'

const KriminalItem = ({ item }) => {

    const matchData = jenisKriminal.find((jenis) => jenis.value === item.jenis)

    return (
        <Pressable style={({ pressed }) => pressed ? [styles.root, { opacity: 0.8 }] : styles.root}>
            <View style={styles.contentContainer}>
                <Text style={styles.titleText}>{item.kecamatan}</Text>
                <Text style={styles.highlightText}>{item.description}</Text>
                <Text style={styles.highlightText}>{dateTranslate(item.time)}</Text>
            </View>
            <View>
                <Text style={[styles.jenis, { backgroundColor: matchData?.color }]}>
                    {matchData?.label}
                </Text>
            </View>
        </Pressable>
    )
}

export default KriminalItem

const styles = StyleSheet.create({
    root: {
        padding: SIZE.normal,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    jenis: {
        padding: 5,
        borderRadius: SIZE.large,
        color: COLORS.white,
        fontSize: SIZE.small
    },
    highlightText: {
        color: 'grey',
        fontSize: SIZE.small
    },
    titleText: {
        color: COLORS.primary,
        fontSize: SIZE.normal,
        fontWeight: 'bold'
    },
    contentContainer:{
        flex: 1
    }
})