// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Check if the token is stored in localStorage during initialization
        const storedToken = localStorage.getItem('token');
        console.log("AUTH PROVIDER: " + storedToken);
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const contextValue = {
        token,
        setToken,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};