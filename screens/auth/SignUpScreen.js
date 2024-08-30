import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Root from "../../component/layout/Root";
import AuthHeader from "../../component/header/AuthHeader";
import { COLORS, SIZE } from "../../constants/appearance";
import { screenSize } from "../../constants/screen-size";
import SignUpForm from "../../component/Forms/SignUpForm";
import DefaultButton from "../../component/button/DefaultButton";
import PressedText from "../../component/text/PressedText";
import { formValidation } from "../../validation/form-validation";
import { createUser } from "../../services/public/user-services";
import { toastShow } from "../../util/toastShow";

const SignUpScreen = ({ navigation }) => {
  const signInHandler = () => navigation.navigate("SignIn");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const getDataHandler = (text, key) => {
    setForm({ ...form, [key]: text });
  };

  const onSignUpPress = async () => {
    const validation = formValidation(form, (error) => {
      setError(error);
    });

    if (validation) {
      const { confirmPassword, ...rest } = form;
      const response = await createUser(rest);
      console.log(response);
      if (response.status === "success") {
        toastShow("Sign Up Success", "success");
        navigation.navigate("SignIn");
      } else {
        toastShow("Sign Up Failed", "error");
        setForm({});
      }
      setForm({});
    }
  };

  return (
    <Root>
      <AuthHeader title={"Sign Up"} onPress={() => navigation.goBack()} />
      <View style={styles.root}>
        <View style={styles.headerContainer}>
          <View style={styles.headerImageContainer}>
            <Image
              source={require("../../assets/icon.png")}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
        <SignUpForm
          data={form}
          getData={(text, key) => getDataHandler(text, key)}
          error={error}
        />
        <DefaultButton
          backIcon={{ name: "person-add-outline" }}
          text={"Sign Up"}
          onPress={onSignUpPress}
        />
        <View style={styles.highLightContainer}>
          <Text style={styles.highLightText}>
            Already have an account?{" "}
            <PressedText onPress={signInHandler}>Sign In</PressedText>
          </Text>
        </View>
      </View>
    </Root>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: SIZE.large,
    justifyContent: "center",
  },
  headerImageContainer: {
    width: screenSize.width / 5,
    aspectRatio: 1,
    marginBottom: SIZE.large,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    alignItems: "center",
  },
  highLightContainer: {
    marginTop: SIZE.normal,
    alignItems: "center",
  },
  highLightText: {
    color: "grey",
  },
});
