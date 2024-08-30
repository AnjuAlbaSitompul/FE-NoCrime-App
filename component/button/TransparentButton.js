import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { COLORS, SIZE } from "../../constants/appearance";

const TransparentButton = ({ onPress, text, style, textStyle, icon }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [styles.buttonContainer, { opacity: 0.7 }, style]
          : [styles.buttonContainer, style]
      }
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name={icon.name}
          size={icon.size ? icon.size : SIZE.large}
          color={icon.color ? icon.color : COLORS.primary}
        />
      </View>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default TransparentButton;

const styles = StyleSheet.create({
  iconContainer: {
    padding: SIZE.small,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    color: COLORS.primary,
  },
});
