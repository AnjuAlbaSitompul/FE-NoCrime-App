import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZE } from '../../constants/appearance'

const DefaultButton = ({ style, text, backIcon, onPress, frontIcon, containerStyle, fetching , disabled }) => {
    return (
        <Pressable disabled={disabled || fetching} onPress={onPress} style={({ pressed }) => pressed ? [styles.container, { opacity: 0.8 }, containerStyle] : [styles.container, containerStyle]}>
            <View style={[styles.buttonContainer,style]}>
                {
                    frontIcon &&
                    <Ionicons name={frontIcon.name} size={ frontIcon.size ? frontIcon.size : SIZE.large} color={frontIcon.color ? frontIcon.color : COLORS.white} />
                }
                {text &&
                    <Text style={styles.text}>{text}</Text>
                }
                {
                    backIcon &&
                    <Ionicons name={backIcon.name} size={ backIcon.size ? backIcon.size : SIZE.large} color={backIcon.color ? icon.color : COLORS.white} />
                }
            </View>
        </Pressable>
    )
};

export default DefaultButton

const styles = StyleSheet.create({

    container: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZE.large,
        padding: SIZE.small,
    },
    text: {
        fontSize: SIZE.normal,
        fontWeight: 'bold',
        color: COLORS.white
    },
    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})