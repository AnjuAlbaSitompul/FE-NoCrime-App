import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TransparetIconButton from '../button/TransparetIconButton'
import { COLORS, SIZE } from '../../constants/appearance'

const AuthHeader = ({ title, onPress }) => {

    return (
        <View style={styles.root}>
            <TransparetIconButton onPress={onPress} icon={'chevron-back-outline'} />
            <View style={styles.content}>
                <Text style={styles.highLightText}>{title}</Text>
            </View>
        </View>
    )
}

export default AuthHeader

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    highLightText: {
        fontSize: SIZE.normal,
        color: COLORS.black,
        fontWeight: 'bold',
        transform: [{ translateX: -SIZE.large }]
    }
})