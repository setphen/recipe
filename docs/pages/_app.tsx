import {AppProps} from 'next/app';
import {useEffect} from 'react';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {gtmId: 'GTM-TJRFGNR'};

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;
