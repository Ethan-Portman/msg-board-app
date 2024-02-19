/*
This file is a wrapper file for the entire application. 

The Entire Application gets
  - Bootstrap Styles
  - AuthProvider Wrapper to provide the useAuth context to all components in the app
*/

import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "@/components/Authentication/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};