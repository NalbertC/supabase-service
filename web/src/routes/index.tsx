import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { SignUp } from "../pages/SignUp";

interface PrivateProps {
  children: JSX.Element
}

export function WebRoutes() {

  const Private = ({ children }: PrivateProps) => {
    const { session } = useAuth();

    // if (loading) {
    //   return <div>Carregando ...</div>;
    // }

    if (!session) {
      return <Navigate to="/login" />;
    }

    return children;
  };


  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Private>
              <Home />
            </Private>
          }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  )
}