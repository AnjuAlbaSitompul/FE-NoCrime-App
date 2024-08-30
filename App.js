import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { COLORS } from './constants/appearance';
import Toast from 'react-native-toast-message';
import { toastConfig } from './component/toast/toast-config';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
      <Toast config={toastConfig} />
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background
  }
});
