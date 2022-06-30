import React,{ createContext } from 'react';
import useFirebase from '../Firebase/useFirebase';


export const Authcontex = createContext();

const AuthProvider = ({ children }) => {
    const allContex = useFirebase();
    return (
        <Authcontex.Provider value={allContex}>
            {children}
        </Authcontex.Provider>
    );
};

export default AuthProvider;