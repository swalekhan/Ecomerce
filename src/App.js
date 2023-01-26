
import './App.css';
import Product from './component/product/Product';
import Header from './component/Header/Header';
import MainCard from './component/Card/MainCard';
import React, { Suspense, useContext, useState } from 'react';
import MainNavbar from './component/Header/MainNavbar';
import { Route, Switch, Redirect } from 'react-router-dom'
import About from './About/About';
import Contact from './contact/Contact';
import Login from './Login/Login';
import Footer from './component/Footer/Footer';
import MainAlert from './component/Alert/Alert';
import Context from './Store/Context';

const Home = React.lazy(()=>import('./Home/Home'))
const SingleProduct = React.lazy(()=>import('./component/product/DynamicPage/SingleProduct'))  // this only then load when we need this component;


function App() {
   const abc = useContext(Context)
   const [alert, setAlert] = useState(false)
   const [state, setState] = useState(false)

   const showHandler = (a) => {
      setState(a);
   }
   const closeHandle = () => {
      setState(false)
   }

   const alertHandler = (a) => {
      setAlert(a)
      setTimeout(() => { setAlert(false) }, 1000)
   }

   let isLogin = abc.isTokenTrue

   return (
      <>
         <MainNavbar onCardShow={showHandler} />
         {state && <MainCard show={state} onHide={closeHandle} />}
         {alert && < MainAlert />}
         <Header />
         <Suspense fallback={<p>Loading...</p>}>    {/*suspense use with react.lazy it handle timing ; */}
         <Switch>
           { isLogin && (
            <Route path='/Home' exact>
               <Home />
            </Route>
           )}

            {isLogin && (
               <Route path="/Product" exact>
                  <Product alertHandler={alertHandler} />
               </Route>
            )}

            <Route path='/About' exact>
               <About />
            </Route>

            <Route path='/Contact' exact>
               <Contact />
            </Route>

            <Route path='/Login' >
               <Login />
            </Route>

            <Route path='/SingleProduct/:id' exact>
               <SingleProduct />
            </Route>

            <Route path='/*' exact >
               <Redirect to='/Login' />
            </Route>
         </Switch>
         </Suspense>
         <Footer />
      </>
   );
}

export default App;
