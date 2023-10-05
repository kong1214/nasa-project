import React, { createContext, useState } from 'react';

export const AuthUserContext = createContext();

export const AuthUserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const values = { user, setUser, isAuthenticated, setIsAuthenticated };

  return <AuthUserContext.Provider value={values}>{children}</AuthUserContext.Provider>;
};
