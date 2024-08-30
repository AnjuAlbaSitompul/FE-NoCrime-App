import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useRef } from "react";
import DefaultTextInput from "../text-input/DefaultTextInput";

const SignInForm = ({ data, getData, error }) => {
  const focusRef = useRef();

  const onLayoutHandler = () => {
    focusRef.current.focus();
  };

  return (
    <KeyboardAvoidingView onLayout={onLayoutHandler} behavior="position">
      <DefaultTextInput
        keyboardType={"email-address"}
        placeholder={"Email"}
        icon={{ name: "mail-outline" }}
        ref={focusRef}
        value={data.email}
        error={error.email}
        getValue={(val) => getData(val, "email")}
      />
      <DefaultTextInput
        placeholder={"Password"}
        password
        icon={{ name: "lock-closed-outline" }}
        value={data.password}
        error={error.password}
        getValue={(val) => getData(val, "password")}
      />
    </KeyboardAvoidingView>
  );
};

export default SignInForm;

const styles = StyleSheet.create({});
