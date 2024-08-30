import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authStore } from "../store/authStore";
import { toastShow } from "../util/toastShow";
import { navigationOptions } from "../constants/navigation-options";
import AuthStack from "./stack/AuthStack";
import MainDrawer from "./drawer/MainDrawer";
import { getUser } from "../services/private/user-services";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const isAuthenticated = authStore((state) => state.isAuth);
  const setIsAuth = authStore((state) => state.signIn);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const response = await getUser();
        if (response.status === "success") {
          setIsAuth(response.data);
        }
      }
    })();
  }, []);

  const Auth = () => (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="wellcome" component={AuthStack} />
    </Stack.Navigator>
  );

  const Main = () => (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Main" component={MainDrawer} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {isAuthenticated ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
