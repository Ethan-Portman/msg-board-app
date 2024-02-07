import Head from "next/head";
import Header from "@/components/Header"
import MessageList from "@/components/MessageList"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Message Board</title>
        <meta name="description" content="A simple message board app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <MessageList />
      <Footer />
    </>
  );
}
