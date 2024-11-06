import React, { createContext, useState, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      return { token, role: decoded.role };
    }
    return { token: null, role: null };
  });

  const login = (token) => {
    const decoded = jwtDecode(token);
    setAuth({ token, role: decoded.role });
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuth({ token: null, role: null });
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};