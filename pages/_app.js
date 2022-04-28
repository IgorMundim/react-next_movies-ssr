import '../styles/globals.css'
import { Header } from '../component/Header/Header'
function MyApp({ Component, pageProps }) {
  return <>
      <div className='wrapper'>
      <Header></Header>
      </div>
  <Component {...pageProps} /></>
}

export default MyApp
