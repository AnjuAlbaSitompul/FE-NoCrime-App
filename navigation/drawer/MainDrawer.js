import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabs from "../tabs/MainTabs";
import { navigationOptions } from "../../constants/navigation-options";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/appearance";

const Drawer = createDrawerNavigator();
const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        ...navigationOptions,
        drawerStyle: styles.drawer,
        drawerPosition: "right",
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.primary,
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen name="MainTabs" component={MainTabs} />
      <Drawer.Screen name="MainTabss" component={MainTabs} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;

const styles = StyleSheet.create({
  drawer: {
    width: "100%",
  },
});
