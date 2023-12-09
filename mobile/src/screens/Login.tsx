import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function Login() {

  const { signIn } = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    signIn(email, password)
  }

  return (
    <View className="flex-1 bg-background justify-center items-center">
      <View className="bg-[#fbfdfd] p-6 rounded-2xl " style={styles.container}>

        <View className="items-center">
          <Logo />
          <Text className="font-bold text-lg text-primary">Autenticação utilizando supabase</Text>
        </View>

        <View className="gap-2 py-2">
          <View className="">
            <Text className="font-bold px-2">E-mail</Text>
            <TextInput className="bg-white  h-10 rounded-full px-4 text-base justify-center"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className="">
            <Text className="font-bold px-2">Senha</Text>
            <TextInput className="bg-white h-10 rounded-full px-4 text-base justify-center"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        <View className="mt-2">
          <Button onPress={handleLogin}>Entrar</Button>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 8, // Esta propriedade é específica do Android para elevar a sombra
  },
  input: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 4, // Esta propriedade é específica do Android para elevar a sombra
  },
});