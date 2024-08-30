import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { COLORS, SIZE } from '../../constants/appearance'

const DefaultCheckBox = ({ children }) => {
    const [isChecked, setChecked] = useState(false)
    return (
        <View style={styles.root}>
            <View>
                <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.highLightText}>{children}</Text>
            </View>
        </View>
    )
}

export default DefaultCheckBox

const styles = StyleSheet.create({
    checkbox: {
        borderColor: COLORS.primary,
        borderRadius: 100
    },
    root: {
        flexDirection: 'row',
        paddingVertical: SIZE.small,
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        marginLeft: SIZE.small
    },
    highLightText: {
        fontSize: SIZE.normal,
        color: 'grey'
    }
})