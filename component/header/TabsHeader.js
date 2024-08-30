import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants/appearance";
import { screenSize } from "../../constants/screen-size";
import TransparetIconButton from "../button/TransparetIconButton";
import { useNavigation } from "@react-navigation/native";
import { authStore } from "../../store/authStore";

const TabsHeader = () => {
  const user = authStore((state) => state.user);
  const navigation = useNavigation();

  const menuOnPress = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/smallLogo.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      {user.role === "ADMIN" && (
        <TransparetIconButton
          icon="menu"
          color={COLORS.primary}
          onPress={() => menuOnPress()}
        />
      )}
    </SafeAreaView>
  );
};

export default TabsHeader;

const styles = StyleSheet.create({
  root: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    height: screenSize.width / 15,
    flex: 1,
  },
});
