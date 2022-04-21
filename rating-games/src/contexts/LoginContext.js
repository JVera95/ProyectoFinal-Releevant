import { createContext, useContext, useState } from "react";

const LoginContext = createContext({
  login: {},
  loggin: () => {},
  errorMessage: "",
});

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default function LoginContextProvider({ children }) {
  const [login, setLogin] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  function loggin(user) {
    if (user.email === "pepe@mail.com" && user.password === "1234") {
      setLogin(user);
    } else {
      setErrorMessage("Error al introducil las credenciales");
    }
  }

  const value = {
    login,
    loggin,
    errorMessage,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
