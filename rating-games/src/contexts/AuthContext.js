import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  auth: {},
  login: () => {},
  errorMessage: "",
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  console.log("Authcontext", auth);
  const [errorMessage, setErrorMessage] = useState("");

  function login(user) {
    if (auth) {
      setAuth(auth);
      setErrorMessage("");
    } else {
      setErrorMessage("Error al introducil las credenciales!");
    }
  }

  const value = {
    auth,
    login,
    errorMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
