import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import DefaultTextInput from "../text-input/DefaultTextInput";
import DefaultCheckBox from "../check-box/DefaultCheckBox";

const SignUpForm = ({ data, getData, error }) => {
  const focusRef = useRef();

  const onLayoutHandler = () => {
    focusRef.current.focus();
  };

  return (
    <KeyboardAvoidingView onLayout={onLayoutHandler} behavior="position">
      <DefaultTextInput
        value={data.name}
        getValue={(val) => getData(val, "name")}
        placeholder={"Nama Lengkap"}
        icon={{ name: "person-outline" }}
        error={error.name}
        ref={focusRef}
      />
      <DefaultTextInput
        value={data.email}
        getValue={(val) => getData(val, "email")}
        keyboardType={"email-address"}
        placeholder={"Email"}
        error={error.email}
        icon={{ name: "mail-outline" }}
      />
      <DefaultTextInput
        value={data.password}
        getValue={(val) => getData(val, "password")}
        placeholder={"Password"}
        password
        error={error.password}
        icon={{ name: "lock-closed-outline" }}
      />
      <DefaultTextInput
        value={data.confirmPassword}
        getValue={(val) => getData(val, "confirmPassword")}
        placeholder={"Confirm Password"}
        password
        error={error.confirmPassword}
        icon={{ name: "lock-closed-outline" }}
      />
      <DefaultCheckBox>
        Saya setuju dengan Terms dan Kondisi yang berlaku pada aplikasi ini
      </DefaultCheckBox>
    </KeyboardAvoidingView>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({});
