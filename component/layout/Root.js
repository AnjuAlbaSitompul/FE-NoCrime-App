import { Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/appearance'

const Root = ({children}) => {
  return (
    <SafeAreaView
        style={styles.root}
    >
        {children}
    </SafeAreaView>
  )
}

export default Root

const styles = StyleSheet.create({
    root:{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: COLORS.background
    }
})