/*
This Next.js component represents the main page of the message board app.
  - It handles user authentication with a token.
      - Conditionally renders the public message board if user is logged in. 
      - Redirects the user to the login page if not logged in. 
  - Fetches data (public messages) from the message-board-api on component mount.
*/

import Head from "next/head";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import MessageBoard from "@/components/MessageBoard/MessageBoard";
import { useAuth } from "@/components/Authentication/AuthContext";
import { useRouter } from "next/router";

const Home = () => {
  const { token, setToken } = useAuth();             // Token for logging in
  const [jsonData, setJsonData] = useState(null);    // Public Messages renderd on the Server
  const router = useRouter();                        // For routing to Login/


  // If user is not authenticated (token is not present), redirect to the login page
  // Fetch messages from the server on component mount
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3004/v1/messages');
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      if (!token) {
        router.push('/Login');
      }
    })();
  }, [token, router]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setToken(null);
  };

  return (
    <>
      <Head>
        <title>Message Board</title>
        <meta name="description" content="A simple message board app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      { /* Only Render MessageBoard if user is logged in */}
      {token ? (
        <Container>
          <Row className='justify-content-center'>
            <Col lg={8}>
              <MessageBoard jsonData={jsonData} />
              <Button onClick={handleLogout}>LOG OUT</Button>
            </Col>
          </Row>
        </Container>
      ) : null}

    </>
  );
};

export default Home;