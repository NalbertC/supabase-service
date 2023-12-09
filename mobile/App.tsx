import {
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
  useFonts
} from "@expo-google-fonts/ubuntu";
import { StatusBar } from 'react-native';

import { Loading } from './src/components/Loading';
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { useAuth } from "./src/hooks/useAuth";
import { Routes } from "./src/routes";

export default function App() {

  const { loading} = useAuth()

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsLoaded || loading) {
    return <Loading />;
  }

  return (
    <>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </>
  );
}