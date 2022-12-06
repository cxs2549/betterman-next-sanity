import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/globals.css"
import { StateContext } from "../context/StateContext"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  )
}

export default MyApp
