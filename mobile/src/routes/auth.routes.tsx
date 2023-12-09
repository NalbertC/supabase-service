import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Screen name="home" component={Home} />
    </Navigator>
  )
}