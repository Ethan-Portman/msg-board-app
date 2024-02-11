import MessageBoard from "@/components/MessageBoard/MessageBoard";
import { Button } from "react-bootstrap";


const AuthenticatedPage = ({ jsonData, setToken }) => {

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setToken(null);
    };

    return (
        <>
            <MessageBoard jsonData={jsonData} />
            <Button onClick={handleLogout}>LOG OUT</Button>
        </>
    );
};

export default AuthenticatedPage;