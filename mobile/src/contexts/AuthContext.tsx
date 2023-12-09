import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";

import { supabase } from "../services/supabase";

interface AuthContextType {
  user: User;
  loading: boolean;
  signOut: () => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
}

interface AuthContextProviderProps {
  children: JSX.Element
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [user, setUser] = useState<User>({} as User);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const recoveredTokenUser = await AsyncStorage.getItem("token");

      try {
        const { data } = await supabase.get("/user", {
          headers: {
            Authorization: `Bearer ${recoveredTokenUser}`
          }
        })

        setUser(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setUser({} as User)
        setLoading(false)
      }
    })()
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const { data } = await supabase.post("/token?grant_type=password", {
        email, password
      })

      const token = data.access_token
      AsyncStorage.setItem("token", token);

      setUser(data.user)
    } catch (error) {
      console.error(error)
      setUser({} as User)
    }
  }

  async function signOut() {
    const recoveredTokenUser = await AsyncStorage.getItem("token");

    console.log(recoveredTokenUser)
    try {
      supabase.defaults.headers.authorization = `Bearer ${recoveredTokenUser}`;
      await supabase.post("/logout")

      await AsyncStorage.removeItem("token");
      setUser({} as User)
    } catch (error) {
      console.log(error, "Deu errado")
    }
  }

  return <AuthContext.Provider value={{ loading, signIn, user, signOut }}>
    {children}
  </AuthContext.Provider>
}
