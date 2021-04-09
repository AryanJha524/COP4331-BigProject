import React, { useState, useEffect, useContext } from 'react';
import fire from './fire';
// stores the user that is logged in 

export const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const[loggedInUser, setLoggedInUser] = useState('');

    useEffect(() => {
        const unsub = fire.auth().onAuthStateChanged(user => {
            setLoggedInUser(user)
        })
        return unsub;
        }, []);

    return (
        <AuthContext.Provider value={{loggedInUser}}>
            {children}
        </AuthContext.Provider>
    );
};
