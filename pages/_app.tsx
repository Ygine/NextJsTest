//styles
import React from 'react';
import '../styles/tailwind.css';
import '../styles/globals.scss'
import NextNprogress from 'nextjs-progressbar';
import { wrapper } from '../src/store';
import storage from '../src/assets/js/storage';

const MyApp = ({ Component, pageProps }) => {
  // const state = useSelector(state => state);

  React.useEffect(() => {
    const lokalTheme = storage.load('theme');
    const wrapper = document.querySelector('[data-themcontainer]');

    if (lokalTheme) {
      wrapper.classList.add(lokalTheme);
      return;
    }

    wrapper.classList.add('default');
  }, []);


    return (
      <>
          {/*@ts-ignore*/}
        <NextNprogress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            options={{
                showSpinner: false
            }}
        />
        <Component {...pageProps} />
      </>
      )
};

export default wrapper.withRedux(MyApp);
