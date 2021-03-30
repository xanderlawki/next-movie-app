import '../styles/globals.css'
import '../styles/home.css';
import Head from 'next/head'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers'
import '../styles/index.scss'


function MyApp({ Component, pageProps }) {
  const store = createStore(reducers, compose(applyMiddleware(thunk)))  
  return (
    <>
    <Head>
    <title>Home</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
  </Head>

   <Navbar/>
   <Provider store={store}>
   <Component {...pageProps} />
   </Provider>
    <Footer/>
    <style jsx>{`
    .base-page {
      padding-top: 100px;
      padding-bottom: 200px
    }
    `

    }

    </style>
    </>
  )
}
const makeStore = ()=> store
export default MyApp
