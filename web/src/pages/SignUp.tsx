import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { Input } from "../Components/Input";
import { Text } from "../Components/Text";
import { supabase } from '../service/supabase';

export function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // const [loading, setLoading] = useState(false);

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault()

    if (password !== passwordConfirm) {
      toast.error("As senhas não se coincidem.");
      return
    }
    if (password.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres.");
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    console.log({ data, error })

    if (error) {
      toast.error("Não foi possível cadastrar");
      return
    }
    toast.success("Cadastro realizado com sucesso");
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">

      <form className="bg-[#fbfdfd] p-6 shadow-lg rounded-2xl w-full max-w-sm flex flex-col gap-3" onSubmit={handleSignUp}>

        <header className="w-full flex items-center justify-center">
          <Heading>Supabase</Heading>
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
          <label className="flex flex-col">
            <Text size="sm" className="px-2 font-bold">Confirmar senha</Text>
            <Input type='password' value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
          </label>

        </main>

        <footer className="">
          <ToastContainer
            theme="colored"
            pauseOnHover
            position="bottom-center"
            hideProgressBar={false}
            pauseOnFocusLoss
            draggable closeOnClick
            newestOnTop={false}
          />
          <Button className="bg-[#023f85]">Cadastrar</Button>
        </footer>

      </form>


    </div>
  )
}