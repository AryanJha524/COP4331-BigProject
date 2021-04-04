import React, { useState, useEffect } from 'react';
import fire from './fire';
// stores the user that is logged in 

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const[loggedInUser, setLoggedInUser] = useState('');

    useEffect(() => {
        fire.auth().onAuthStateChanged(setLoggedInUser);
    }, []);

    return (
        <AuthContext.Provider value={{loggedInUser}}>
            {children}
        </AuthContext.Provider>
    );
};
