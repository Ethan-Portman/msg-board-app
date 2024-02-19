// _app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "@/components/Authentication/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};