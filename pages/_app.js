import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
