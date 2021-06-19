import Modal from "react-modal";

import { Header } from '../components/Header';
import '../styles/global.scss';

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
