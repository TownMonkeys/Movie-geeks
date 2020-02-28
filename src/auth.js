import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState('notSet');
  
  // Add auth listener
  useEffect(function addAuthStateListener() {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);
  
  // Redirect based on the user state
  const history = useHistory();
  useEffect(function redirectBasedOnAuthState() {
    if (user) {
      history.push('/');
    }
  }, [ user ]);

  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {user !== 'notSet' && 
        children
      }
    </AuthContext.Provider>
  )
}