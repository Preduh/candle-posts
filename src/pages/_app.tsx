import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import "../../styles/globals.css"
import { AuthProvider } from "../context/auth"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
