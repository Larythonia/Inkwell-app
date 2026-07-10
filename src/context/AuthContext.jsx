import { createContext, useContext, useState } from "react";
import { getStorageItem, setStorageItem, removeStorageItem } from "../utils/localStorage";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getStorageItem("user"));

  const signup = (fullname, email, password, confirmPassword) => {
    if (!fullname || !email || !password) {
      return { success: false, error: "All fields are required" };
    }

    const registeredUser = { fullname, email, password, confirmPassword };
    setStorageItem("registeredUser", registeredUser);

    return { success: true };
  };

  const login = (email, password) => {
    if (!email || !password) {
      return { success: false, error: "All fields are required" };
    }

    const registeredUser = getStorageItem("registeredUser");

    if (!registeredUser) {
      return { success: false, error: "No account found. Please sign up first." };
    }

    if (registeredUser.email !== email || registeredUser.password !== password) {
      return { success: false, error: "Invalid email or password" };
    }

    const sessionUser = { fullname: registeredUser.fullname, email: registeredUser.email };
    setUser(sessionUser);
    setStorageItem("user", sessionUser);

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    removeStorageItem("user");
  };

  const value = {
    user,
    isAuthenticated: user !== null,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };