/*
This Next.js component represents the main page of the message board app
  - Fetches data from message-board-api on component mount
  - Handles user authentication with a token
  - Conditionally renders either the message board or the login page 
      - The AuthenticationWrapper ensures protected access to the message board
*/

import Head from "next/head";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'; // Import the useRouter
import Login from '@/pages/Login';
import AuthenticationWrapper from "@/components/Authentication/AuthenticationWrapper";

export default function Home() {
  const [token, setToken] = useState(null);         // User Authentication
  const [jsonData, setJsonData] = useState(null);   // Fetched data from the Server
  const router = useRouter();                       // For Routing

  // Fetch public messages data from the API on component mount 
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3004/v1/messages');
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  // Logout function to remove token and navigate to login page
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setToken(null);
    router.push('/Login');
  };

  return (
    <>
      <Head>
        <title>Message Board</title>
        <meta name="description" content="A simple message board app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Conditional rendering based on user authentication */}
      {token ? (
        <AuthenticationWrapper>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={8}>
                <MessageBoard jsonData={jsonData} />
                <Button onClick={handleLogout}>LOG OUT</Button>
              </Col>
            </Row>
          </Container>
        </AuthenticationWrapper>
      ) : (
        <Login />
      )}
    </>
  );
};