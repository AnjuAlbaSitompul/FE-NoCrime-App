import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Mainscreen from '../../screens/Main/MainScreen'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { COLORS, SIZE } from '../../constants/appearance'
import HistoryScreen from '../../screens/Main/HistoryScreen'
import { screenSize } from '../../constants/screen-size'
import TabsHeader from '../../component/header/TabsHeader'
import UserScreen from '../../screens/Main/UserScreen'
import { Ionicons } from '@expo/vector-icons'

const Tabs = createMaterialTopTabNavigator()
const MainTabs = () => {
    return (
        <View style={styles.root}>
            <TabsHeader />
            <Tabs.Navigator
                initialLayout={screenSize.width}
                screenOptions={{
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarInactiveTintColor: 'grey',
                    tabBarIndicatorStyle: styles.indicator,
                    tabBarStyle: styles.tabBarStyle,
                    tabBarShowLabel: false
                }}
            >
                <Tabs.Screen name="Home" component={Mainscreen} options={{
                    tabBarIcon: ({color}) => (
                    <Ionicons name='map' size={SIZE.large} color={color}/>      
                    )
                }} />
                <Tabs.Screen name="History" component={HistoryScreen} options={{
                    tabBarIcon: ({color}) => (
                    <Ionicons name='time' size={SIZE.large} color={color}/>      
                    )
                }} />
                <Tabs.Screen name='User' component={UserScreen} options={{
                    tabBarIcon: ({color}) => (
                    <Ionicons name='person' size={SIZE.large} color={color}/>      
                    )
                }} />
            </Tabs.Navigator>
        </View>
    )
}

export default MainTabs

const styles = StyleSheet.create({
    indicator: {
        backgroundColor: COLORS.primary,
        height: 3
    },
    tabBarStyle: {
        backgroundColor: COLORS.white,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: COLORS.lightGray
    },
    root: {
        flex: 1
    }
})