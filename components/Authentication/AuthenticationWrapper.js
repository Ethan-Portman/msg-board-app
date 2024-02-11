// AuthenticationWrapper.js
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
                // Your token validation logic here
                return true;
            } catch (err) {
                console.error("Error decoding or validating token:", err);
                return false;
            }
        }

        if (!isValidToken(token)) {
            router.push('/Login');
        }
    }, [router]);

    return <>{children}</>;
};

export default AuthenticationWrapper;