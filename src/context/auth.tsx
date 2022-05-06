import route from "next/router"
import { createContext, useState } from "react"

type ErrorMessage = {
  error: string
}

type AuthContextTypes = {
  signIn: ({ username, password }: SignIn) => Promise<boolean | ErrorMessage>
  loading: boolean
}

const AuthContext = createContext({} as AuthContextTypes)

export default AuthContext

type SignIn = {
  username: string
  password: string
}

const AuthProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false)

  const signIn = async ({ username, password }: SignIn) => {
    setLoading(true)

    const formatedUsername = username.toLocaleLowerCase().replaceAll(" ", "")

    if (formatedUsername === "preduh" && password === "123456") {
      setLoading(false)

      return await route.push("/home")
    } else {
      setLoading(false)

      return { error: "Username or password is incorrect" }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
