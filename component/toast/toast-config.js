import {View, Text, StyleSheet} from 'react-native';
import { COLORS, SIZE } from '../../constants/appearance';
import {Ionicons} from '@expo/vector-icons'
const toastConfig = {
    costumeToast: ({ text1, props }) => (
        <View style={[styles.rootToast, {backgroundColor: props.status === 'success' ? COLORS.success : COLORS.danger}]}>
            <Ionicons
                name={props.status === 'success' ? 'checkmark-circle' : 'close-circle'}
                color={COLORS.white}
                size={SIZE.normal}
            />
            <Text style={styles.toastText}>{text1}</Text>
        </View>
    )
}

export {
    toastConfig
}

const styles = StyleSheet.create({
    rootToast: {
        zIndex: 100,
        elvation: 2,
        width: '90%',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    toastText: {
        color: COLORS.white,
        marginLeft: 10,
        fontSize: SIZE.normal,
        flex: 1
    }
})