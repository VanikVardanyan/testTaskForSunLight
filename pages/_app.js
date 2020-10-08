import { Provider } from 'react-redux';
import './style.scss';
import store from '../store';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
