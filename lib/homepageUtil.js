import axios from 'axios';
import { useRouter } from 'next/router';

const fetchMessages = async () => {
    const MESSAGES_ENDPOINT = 'http://172.30.71.9:3004/v1/messages';
    try {
        const response = await axios.get(MESSAGES_ENDPOINT);
        return response.data;
    } catch (error) {
        console.log('Error fetching data:', error);
        return null;
    }
}

const redirectIfNeeded = (loading, token, router) => {
    if (!loading) {
        if (token == null) { router.push('/login'); }
        if (router.pathname == '/') { router.push('/homepage'); }
    }
}

export { fetchMessages, redirectIfNeeded };