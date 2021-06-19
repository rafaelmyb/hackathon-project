import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'next-auth/client';
import NProgress from 'nprogress';

import { Header } from '../components/Header';

import '../styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
});

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    function handleProgressStart() {
      NProgress.start();
    }

    function handleProgressStop() {
      NProgress.done();
    }

    router.events.on('routeChangeStart', handleProgressStart);
    router.events.on('routeChangeComplete', handleProgressStop);
    router.events.on('routeChangeError', handleProgressStop);

    return () => {
      router.events.off('routeChangeStart', handleProgressStart);
      router.events.off('routeChangeComplete', handleProgressStop);
      router.events.off('routeChangeError', handleProgressStop);
    };
  }, [router]);

  return (
    <Provider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
