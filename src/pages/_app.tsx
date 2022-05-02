import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import "../../styles/globals.css";
import { AuthProvider } from "../context/auth";
import ThemeContext from "../context/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ThemeContext}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
