import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { authStore } from "../../store/authStore";
import { COLORS, SIZE } from "../../constants/appearance";
import { Ionicons } from "@expo/vector-icons";
import TransparentButton from "../../component/button/TransparentButton";
import { logoutUser } from "../../services/private/user-services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { toastShow } from "../../util/toastShow";

const UserScreen = () => {
  const user = authStore((state) => state.user);
  const signOut = authStore((state) => state.signOut);

  const signOutHandler = async () => {
    const response = await logoutUser();
    if (response.status === "success") {
      await AsyncStorage.clear();
      signOut();
      toastShow("Sign Out Success", "success");
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="person" size={SIZE.large} color={COLORS.primary} />
        </View>
        <View>
          <Text style={[styles.text, { fontSize: SIZE.large }]}>
            {user.name}
          </Text>
          <Text style={[styles.text, { fontSize: SIZE.small }]}>
            {user.email}
          </Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <TransparentButton
          icon={{ name: "log-out", size: SIZE.veryLarge }}
          text={"Sign Out"}
          onPress={() => signOutHandler()}
        />
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerContainer: {
    padding: SIZE.small,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  text: {
    color: COLORS.primary,
  },
  iconContainer: {
    padding: SIZE.small,
  },
});
