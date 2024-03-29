import '../styles/globals.css'
//import { AppProvider } from './context/context';
import { Provider } from "react-redux";
import { store } from '../redux/store/index';

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
       <Component {...pageProps} />
    </Provider>

  )
  
 
}

export default MyApp
