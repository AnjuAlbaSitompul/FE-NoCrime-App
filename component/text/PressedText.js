import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZE } from '../../constants/appearance'

const PressedText = ({onPress, style, children}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && {opacity: 0.5}}>
      <Text style={[styles.text, style]}>{children}</Text>
    </Pressable>
  )
}

export default PressedText

const styles = StyleSheet.create({
    text:{
        color: COLORS.primary,
        transform: [{translateY: 4}]
    }
})