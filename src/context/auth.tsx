import route from "next/router"
import { destroyCookie, setCookie } from "nookies"
import { createContext, useState } from "react"
import api from "../utils/api"

type ErrorMessage = {
  error: string
}

type AuthContextTypes = {
  signIn: ({
    username,
    password,
  }: SignInType) => Promise<boolean | ErrorMessage>
  loading: boolean
  logout: () => void
}

const AuthContext = createContext({} as AuthContextTypes)

export default AuthContext

type SignInType = {
  username: string
  password: string
}

type UserType = {}

const AuthProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<UserType | null>(null)

  const signIn = async ({ username, password }: SignInType) => {
    setLoading(true)

    try {
      const { data } = await api.post("/create-session", { username, password })

      setLoading(false)
      setUser(data.user)
      setCookie(undefined, "candle.token", data.token)
      route.push("/home")
    } catch (error) {
      setLoading(false)

      return error.response.data
    }
  }

  const logout = () => {
    destroyCookie(undefined, "candle.token")
    route.push("/")
  }

  return (
    <AuthContext.Provider value={{ signIn, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
