/*
This component enforces user authentication in a Next.js app. 
   - It checks for a valid sessionStorage token, representing if the user is logged in
       - redirects user to login page if token is absent or invalid. 
   - Sets the token state for managing user authentication across the app. 

Usage: 
<AuthenticationWrapper> 
   <SomeComponent /> 
</AuthenticationWrapper>.
*/

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthenticationWrapper = ({ children, setToken }) => {
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        const isValidToken = (token) => {
            if (!token) {
                return false;
            }
            try {
                setToken(token);
                return true;
            } catch (err) {
                console.error("Error decoding or validating token:", err);
                return false;
            }
        }

        if (!isValidToken(token)) {
            router.push('/Login');
        }
    }, [router, setToken]);

    if (isValidToken) {
        return <>{children}</>;
    }
};

export default AuthenticationWrapper;