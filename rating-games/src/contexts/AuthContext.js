import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  auth: {},
  setAuth: () => {},
  errorMessage: "",
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const value = {
    auth,
    setAuth,
    errorMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
