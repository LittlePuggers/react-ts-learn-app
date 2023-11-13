import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const userInitialState = {
    name: "",
    lastName: "",
    dateBirth: "",
    address: "",
    email: "",
    password: "",
    role: "",
  };
  const [user, setUser] = useState(userInitialState);
  const [emailContext, setEmailContext] = useState("");
  const [tempPass, setTempPass] = useState("");

  const userContextValue = {
    user,
    setUser,
    emailContext,
    setEmailContext,
    tempPass,
    setTempPass,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
