import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  auth: {},
  setAuth: () => {},
  logout: () => {},
  errorMessage: "",
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const value = {
    auth,
    setAuth,
    errorMessage,
    logout,
  };

  function logout() {
    setAuth(null);
    window.localStorage.removeItem("loggedIn");
    setErrorMessage("");
    navigate("/login");
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
