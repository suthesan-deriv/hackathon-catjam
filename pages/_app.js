import '../styles/globals.css'
import Loader from './components/Loader'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
