import { View } from 'react-native'
import { COLORS } from '../../constants/appearance'

const SmallLine = () => {
    return (
        <View style={{ width: '20%', height: 3, alignSelf: 'center', borderRadius: 20, backgroundColor: COLORS.white, marginBottom: 10 }} />
    )
}

export default SmallLine