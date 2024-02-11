// index.js
import Head from "next/head";
import { Container, Row, Col } from 'react-bootstrap'
import Header from "@/components/MessageBoard/Header";
import MessageBoard from "@/components/MessageBoard/MessageBoard";
import RegisterOffCanvas from "@/components/Authentication/RegisterOffCanvas";
import axios from 'axios';

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
            <MessageBoard jsonData={jsonData} />
            <RegisterOffCanvas />
          </Col>
        </Row>
      </Container>
    </>
  );
}
