// pages/index.js

import Head from "next/head";
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MessageBoard from "@/components/MessageBoard/MessageBoard";
import { useAuth } from "@/components/Authentication/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = ({ jsonData }) => {
  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    const hasToken = token != null;

    if (hasToken) {
      router.push('/homepage');
    } else {
      router.push('/login');
    }
  }, [router]);

  return null;
};


export default Home;
