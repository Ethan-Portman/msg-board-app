// index.js
import Head from "next/head";
import axios from 'axios';
import { useEffect, useState } from "react";
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import AuthenticationWrapper from "@/components/Authentication/AuthenticationWrapper";

export default function Home() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Head>
        <title>Message Board</title>
        <meta name="description" content="A simple message board app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AuthenticationWrapper setToken={setToken}>
        <Home setToken={setToken} />
      </AuthenticationWrapper>
      <Login />
    </>
  );
};
