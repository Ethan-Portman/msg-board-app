/*
Defines a React Context for managing authentication state
  - AuthProvider: Wraps application with the authentication context
  - useAuth: To consume the authentication context within components

The context provides:
  - token / setToken: 
  - loading: 

AuthProvider will attempt to load token from local storage 
  - Loading represents the time it takes to do this
*/

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [token, setToken] = useState(null);
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedName = localStorage.getItem('name');
        if (storedToken) {
            setToken(storedToken);
        }
        if (storedName) {
            setToken(storedName);
        }
        setLoading(false);
    }, []);

    const contextValue = {
        token,
        setToken,
        loading,
        name,
        setName,
        id,
        setId
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {!loading && children} {/* Render children only when loading is false */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
