// AuthenticationWrapper.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthenticationWrapper = ({ children }) => {
    const router = useRouter();
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        // Check if user is authenticated
        if (!token) {
            router.push('/login');  // Redirect if not
        }
    }, [token, router]);

    // Render the child components if authenticated
    return token ? children : null;
};

export default AuthenticationWrapper;