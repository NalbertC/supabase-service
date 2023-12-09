import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Loading } from "../components/Loading";

const { Navigator, Screen } = createNativeStackNavigator();

export function LoadingRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Screen name="login" component={Loading} />
    </Navigator>
  )
}