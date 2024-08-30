import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { forwardRef, useState } from "react";
import { COLORS, SIZE } from "../../constants/appearance";
import TransparetIconButton from "../button/TransparetIconButton";

const DefaultTextInput = forwardRef(
  (
    { placeholder, getValue, value, keyboardType, password, error, icon },
    ref
  ) => {
    const [show, setShow] = useState({
      showPassword: password,
      icon: password ? "eye-outline" : "eye-off-outline",
    });

    const showPassword = () => {
      setShow({
        showPassword: !show.showPassword,
        icon: show.showPassword ? "eye-off-outline" : "eye-outline",
      });
    };
    return (
      <View style={styles.container}>
        <View style={styles.root}>
          {icon && (
            <Ionicons
              style={styles.button}
              name={icon.name}
              size={icon.size ? icon.size : SIZE.large}
              color={icon.color ? icon.color : "grey"}
            />
          )}
          <TextInput
            style={styles.textInput}
            secureTextEntry={show.showPassword}
            keyboardType={keyboardType}
            ref={ref}
            placeholder={placeholder}
            onChangeText={(val) => getValue(val)}
            value={value}
          />
          {password && (
            <TransparetIconButton
              onPress={showPassword}
              style={styles.button}
              icon={show.icon}
            />
          )}
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }
);

export default DefaultTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZE.small,
  },
  root: {
    flexDirection: "row",
    backgroundColor: COLORS.darkerWhite,
    alignItems: "center",
    padding: SIZE.small,
    borderRadius: SIZE.veryLarge,
  },
  textInput: {
    fontSize: SIZE.large,
    flex: 1,
  },
  button: {
    paddingVertical: 0,
    paddingHorizontal: 5,
  },
  errorText: {
    marginLeft: SIZE.small,
    color: COLORS.danger,
    fontSize: SIZE.small,
  },
});
