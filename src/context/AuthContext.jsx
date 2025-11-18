import { createContext, useContext, useState } from "react";
import * as userService from "../services/userService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // login
  const login = async (email, password) => {
    const data = await userService.loginUser(email, password);
    setUser(data.user);
  };

  // logout
  const logout = () => {
    userService.logoutUser();
    setUser(null);
  };

  // get current user
  const fetchCurrentUser = async () => {
    const user = await userService.getUser();
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        fetchCurrentUser,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
