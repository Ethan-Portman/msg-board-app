// index.js
import Head from "next/head";
import { Container, Row, Col } from 'react-bootstrap'
import Header from "@/components/MessageBoard/Header";
import LoginPage from '@/pages/LoginPage';
import AuthenticatedPage from '@/pages/AuthenticatedPage';
import Footer from "@/components/MessageBoard/Footer";
import axios from 'axios';
import { useEffect, useState } from "react";

// Function to allow Next.js to do Static Generation pre-rendering
// Instead of client making the axios call, Next does and delivers results for you
export async function getStaticProps() {
  let jsonData;

  try {
    const { data } = await axios.get('http://localhost:3004/v1/messages');
    jsonData = data;
  } catch (error) {
    console.log('API Error: ' + error);
  }

  return {
    props: {
      jsonData
    }
  }
}

export default function Home({ jsonData }) {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    // Retrieve token from sessionStorage on the client side
    const storedToken = sessionStorage.getItem('token');
    setAuthToken(storedToken);
  }, []);

  return (
    <>
      <Head>
        <title>Message Board</title>
        <meta name="description" content="A simple message board app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Container>
        <Row className='justify-content-center'>
          <Col lg={8}>
            {authToken ? <AuthenticatedPage jsonData={jsonData} setToken={setAuthToken} /> : <LoginPage setToken={setAuthToken} />}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
