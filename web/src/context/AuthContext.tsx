import { AuthTokenResponse, Session } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";
import { supabase } from "../service/supabase";

interface AuthContextType {
  session: Session;
  authenticated: boolean;
  signOut: () => Promise<void>
  signIn: (email: string, password: string) => Promise<AuthTokenResponse>
}

interface AuthContextProviderProps {
  children: JSX.Element
}
export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [session, setSession] = useState<Session>({} as Session);
  const [controller, setCntroller] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession()

      if (data) {
        console.log(data)
        setSession(data.session!)
      }
    })()
  }, [controller]);

  async function signIn(email: string, password: string) {
    const response = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (response.data) {
      setSession(response.data.session!)
    }

    return response
  }

  async function signOut() {
    await supabase.auth.signOut()
    setCntroller(!controller)
  }

  return <AuthContext.Provider value={{ session, authenticated: !!session, signOut, signIn }}>
    {children}
  </AuthContext.Provider>
}

