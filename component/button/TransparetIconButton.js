import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SIZE } from "../../constants/appearance";

const TransparetIconButton = ({ onPress, color, size, icon, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [styles.container, { opacity: 0.5 }, style]
          : [styles.container, style]
      }
    >
      <Ionicons
        name={icon}
        size={size ? size : SIZE.large}
        color={color ? color : "grey"}
      />
    </Pressable>
  );
};

export default TransparetIconButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
