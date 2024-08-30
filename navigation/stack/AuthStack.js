import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WellcomeScreen from '../../screens/auth/WellcomeScreen'
import { navigationOptions } from '../../constants/navigation-options'
import SignInScreen from '../../screens/auth/SignInScreen'
import AuthScreen from '../../screens/auth/AuthScreen'
import SignUpScreen from '../../screens/auth/SignUpScreen'

const Auth = createNativeStackNavigator()
const AuthStack = () => {
  return (
    <Auth.Navigator screenOptions={navigationOptions}>
        <Auth.Screen name="Wellcome" component={WellcomeScreen} />
        <Auth.Screen name='Auth' component={AuthScreen} />
        <Auth.Screen name="SignIn" component={SignInScreen}/>
        <Auth.Screen name="SignUp" component={SignUpScreen}/>
    </Auth.Navigator>
  )
}

export default AuthStack