import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Root from "../../component/layout/Root";
import { COLORS, SIZE } from "../../constants/appearance";
import DefaultButton from "../../component/button/DefaultButton";
import { screenSize } from "../../constants/screen-size";

const AuthScreen = ({ navigation }) => {
  const signUpHandler = () => {
    navigation.navigate("SignUp");
  };

  const signInHandler = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Root>
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/nocrime.png")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.buttonContainer}>
          <DefaultButton
            onPress={signInHandler}
            text={"Sign In"}
            backIcon={{ name: "log-in-outline" }}
            style={styles.button}
            containerStyle={{ marginBottom: 10 }}
          />
          <DefaultButton
            onPress={signUpHandler}
            text={"Sign Up"}
            backIcon={{ name: "person-add-outline" }}
            style={styles.button}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerImageContainer}>
          <Image
            source={require("../../assets/images/kejaksaan.png")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <Text style={styles.hightlightText}>Powered By Kejaksaan</Text>
        <Text style={styles.hightlightText}>Kota Tanjungbalai</Text>
      </View>
    </Root>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZE.large,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: screenSize.width / 10,
  },
  footerImageContainer: {
    width: screenSize.width / 10,
    aspectRatio: 1,
  },
  footerContainer: {
    padding: SIZE.large,
    alignItems: "center",
    height: screenSize.height / 8,
  },
  hightlightText: {
    fontSize: SIZE.small,
    color: COLORS.primary,
  },
});
