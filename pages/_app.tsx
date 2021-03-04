//styles
import '../styles/tailwind.css';
import '../styles/globals.scss'
import NextNprogress from 'nextjs-progressbar';
import { wrapper } from '../src/store';
import { useSelector } from 'react-redux';

const MyApp = ({ Component, pageProps }) => {
  // const state = useSelector(state => state);

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
