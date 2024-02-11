// LoginPage.js
import React from 'react';
import LoginForm from '@/components/Authentication/LoginForm';

const LoginPage = () => {
    const handleLogin = (formData) => {
        // Implement the login logic here (e.g., make an API call)
        console.log('Login form submitted:', formData);
    };

    return (
        <div className="login-page">
            <h2>Login Page</h2>
            <LoginForm handleLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;