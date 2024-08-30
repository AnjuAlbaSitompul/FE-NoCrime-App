import { Image, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import Root from "../../component/layout/Root";
import AuthHeader from "../../component/header/AuthHeader";
import SignInForm from "../../component/Forms/SignInForm";
import { SIZE } from "../../constants/appearance";
import { screenSize } from "../../constants/screen-size";
import DefaultButton from "../../component/button/DefaultButton";
import PressedText from "../../component/text/PressedText";
import { authStore } from "../../store/authStore";
import { formValidation } from "../../validation/form-validation";
import { loginUser } from "../../services/public/user-services";
import { toastShow } from "../../util/toastShow";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignInScreen = ({ navigation }) => {
  const sign = authStore((state) => state.signIn);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const signUpHandler = () => {
    navigation.navigate("SignUp");
  };

  const signInHandler = async () => {
    const validate = formValidation(form, (error) => {
      setError(error);
    });

    if (validate) {
      const response = await loginUser(form);
      if (response.status === "success") {
        console.log(response.data.user);
        sign(response.data.user);
        await AsyncStorage.setItem("token", response.data.accessToken);
      } else {
        toastShow(response.message, "error");
      }
    }
  };

  const callBackForm = (text, key) => {
    setForm({ ...form, [key]: text });
  };

  return (
    <Root>
      <AuthHeader title={"Sign In"} onPress={() => navigation.goBack()} />
      <View style={styles.root}>
        <View style={styles.headerContainer}>
          <View style={styles.imageHeaderContainer}>
            <Image
              source={require("../../assets/icon.png")}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
        <SignInForm data={form} getData={callBackForm} error={error} />
        <DefaultButton
          onPress={signInHandler}
          text={"Sign In"}
          backIcon={{ name: "log-in-outline" }}
        />
        <View style={styles.highLightedContainer}>
          <Text style={styles.highLightText}>
            Don't have an account?{" "}
            <PressedText onPress={signUpHandler}>Sign Up</PressedText>
          </Text>
        </View>
      </View>
    </Root>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: SIZE.large,
    justifyContent: "center",
  },
  imageHeaderContainer: {
    width: screenSize.width / 3,
    aspectRatio: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: SIZE.large,
  },
  highLightedContainer: {
    alignItems: "center",
    marginTop: SIZE.normal,
    justifyContent: "center",
  },
  highLightText: {
    color: "gray",
  },
});
