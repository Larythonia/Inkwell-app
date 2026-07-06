import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (fullname, email, password) => {
    if (!fullname || !email || !password) {
      return { success: false, error: "All fields are required" };
    };

    const fakeUser = { fullname, email };

    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));

    return { success: true };
  }

    // Logging out//
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = { 
    user, 
    isAuthenticated: user !== null,
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
