import { StyleSheet, Text, View } from 'react-native'
import TransparetIconButton from '../button/TransparetIconButton'
import { COLORS, SIZE } from '../../constants/appearance'
const CustomIconHeader = ({title, icon, onPress}) => {
    return (
        <View style={styles.root}>
            <View style={styles.floatIcon}>
                <TransparetIconButton onPress={onPress} icon={icon} />
            </View>
            <View style={styles.content}>
                <Text style={styles.highLightText}>{title}</Text>
            </View>
        </View>
    )
}

export default CustomIconHeader

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZE.small
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    highLightText: {
        fontSize: SIZE.normal,
        color: COLORS.black,
        fontWeight: 'bold',
    },
    floatIcon:{
        position: 'absolute',
        left: 0,
        top: 0
    }
})