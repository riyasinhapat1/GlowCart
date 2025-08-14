import React, { createContext, useState } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = ({ email, password }) => {
    if (email && password) { setUser({ name: 'Guest', email }); return { ok:true }; }
    return { ok:false, error:'Provide credentials' };
  };
  const register = ({ name, email, password }) => {
    if (name && email && password) { setUser({ name, email }); return { ok:true }; }
    return { ok:false, error:'Missing fields' };
  };
  const logout = () => setUser(null);
  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
};
