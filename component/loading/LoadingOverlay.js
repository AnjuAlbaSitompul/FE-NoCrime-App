import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/appearance";

const LoadingOverlay = ({ size, color }) => {
  return (
    <View>
      <ActivityIndicator
        size={size ? size : "large"}
        color={color ? color : COLORS.primary}
      />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({});
