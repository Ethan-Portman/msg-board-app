import axios from "axios";

const register = async (credentials) => {
    const REGISTER_ENDPOINT = 'http://172.30.71.9:3004/v1/users';

    const response = await axios.post(REGISTER_ENDPOINT, credentials);
    console.log("SOMMMMMMMMMMMMMMMMMMMEEEEEEEE\n\n\n");


}


const signIn = async (credentials) => {
    const LOGIN_API_ENDPOINT = 'http://172.30.71.9:3004/v1/login';
    try {
        const response = await axios.post(LOGIN_API_ENDPOINT, credentials);
        const token = response.data.token;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        console.error('Sign in error:', error);
        throw { type: 'CredentialsSignin', message: 'Invalid credentials.', originalError: error };
    }
};

export { signIn, register };