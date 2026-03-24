 
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [MyEmail, setMyEmail] = useState({ user_email: "", user_username: "", user_address: "" });
 
  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    const storedUser = sessionStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setIsLoggedIn(true);
      setMyEmail(JSON.parse(storedUser));
    }
  }, []);

  const login = (userToken, userData) => {
 
    sessionStorage.setItem('token', userToken);
    sessionStorage.setItem('user', JSON.stringify(userData));
    
    setToken(userToken);
    setIsLoggedIn(true);
    setMyEmail(userData);
  };

  const SetTheEmail = (_email) => {
    setMyEmail(_email);
 
    sessionStorage.setItem('user', JSON.stringify(_email));
  };

  const logout = () => {
   
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
     
    setToken(null);
    setIsLoggedIn(false);
    setMyEmail({ user_email: "", user_username: "", user_address: "" });
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      MyEmail, 
      token,
      login, 
      logout, 
      SetTheEmail 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};