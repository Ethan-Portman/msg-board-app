import Head from "next/head";
import { Container, Row, Col } from 'react-bootstrap'
import Header from "@/components/Header";
import MessageBoard from "@/components/MessageBoard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Message Board</title>
        <meta name="description" content="A simple message board app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container>
        <Row className='justify-content-center'>
          <Col lg={8}>
            <Header />
            <MessageBoard />
            <Footer />
          </Col>
        </Row>
      </Container>

    </>
  );
}
