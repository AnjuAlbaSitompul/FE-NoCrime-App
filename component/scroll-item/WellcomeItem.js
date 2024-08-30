import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SIZE } from '../../constants/appearance'
import { screenSize } from '../../constants/screen-size'


const WellcomeItem = ({ item, index }) => {
    return (
        <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={item.image}
                    style={styles.image}
                    resizeMode='contain'
                />
            </View>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    )
}

export default WellcomeItem

const styles = StyleSheet.create({
    contentContainer: {
        width: screenSize.width,
        paddingHorizontal: SIZE.large,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        aspectRatio: 1,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: SIZE.large,
        fontWeight: 'bold',
    },
})