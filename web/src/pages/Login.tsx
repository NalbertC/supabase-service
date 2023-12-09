import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { Input } from "../Components/Input";
import { Logo } from "../Components/Logo";
import { Text } from "../Components/Text";
import { useAuth } from "../hooks/useAuth";

export function Login() {

  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    if (email === "" || password === "") {
      toast.error("Todos os campos devem estar preenchidos")
      return
    }

    const { error } = await signIn(
      email,
      password
    )

    if (error) {
      toast.error(error.message)
      return
    }

    navigate("/")

  }

  return (
    <div className="w-full h-screen flex items-center justify-center">

      <form className="bg-[#fbfdfd] p-6 shadow-lg rounded-2xl w-full max-w-sm flex flex-col gap-4" onSubmit={handleLogin}>

        <header className="w-full flex items-center justify-center flex-col">
          <Logo color="#023f85" size={48}/>
          <Heading size="sm">Autenticação utilizando  supabase</Heading>
        </header>

        <main className="flex flex-col gap-2">

          <label className="flex flex-col">
            <Text size="sm" className="px-2 font-bold">E-mail</Text>
            <Input type='email' value={email} onChange={e => setEmail(e.target.value)} />
          </label>

          <label className="flex flex-col">
            <Text size="sm" className="px-2 font-bold">Senha</Text>
            <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          </label>
        </main>

        <footer className="">
          <ToastContainer
            theme="colored"
            position="bottom-center"
            hideProgressBar={false}
            pauseOnFocusLoss={false}
            draggable closeOnClick
            newestOnTop={false}
          />
          <Button className="bg-[#023f85]">Entrar</Button>
        </footer>

      </form>


    </div>
  )
}