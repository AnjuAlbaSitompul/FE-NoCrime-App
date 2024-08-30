import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZE } from '../../constants/appearance'

const DefaultPicker = ({ frontIcon, backIcon, selectedValue, setSelectedValue, firstItem, item }) => {
    return (
        <View style={styles.root}>
            {frontIcon &&
                <Ionicons name={frontIcon.name} size={frontIcon.size ? frontIcon.size : SIZE.large} color={frontIcon.color ? frontIcon.color : COLORS.primary} />
            }
            <Picker
                selectedValue={selectedValue}
                onValueChange={setSelectedValue}
                style={styles.picker}
            >
                <Picker.Item label={firstItem} value={null} />
                {
                    item.map((item, index) => (
                        <Picker.Item key={index} label={item.label} value={item.value} />
                    ))
                }

            </Picker>
            {backIcon &&
                <Ionicons name={backIcon.name} size={backIcon.size ? backIcon.size : SIZE.large} color={backIcon.color ? backIcon.color : COLORS.primary} />
            }
        </View>
    )
}

export default DefaultPicker

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    picker:{
        flex: 1
    }
})