
import './App.css';
import Product from './component/product/Product';
import Header from './component/Header/Header';
import MainCard from './component/Card/MainCard';
import { useContext, useState } from 'react';
import MainNavbar from './component/Header/MainNavbar';
// import ContextProvider from './Store/ContextProvider';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import Contact from './contact/Contact';
import SingleProduct from './component/product/DynamicPage/SingleProduct';
import Login from './Login/Login';
import Footer from './component/Footer/Footer';
import MainAlert from './component/Alert/Alert';
import Context from './Store/Context';


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

   let isLogin = !!abc.token

   return (
      <>
         <MainNavbar onCardShow={showHandler} />
         {alert && < MainAlert />}
         <Header />
         <Switch>

           { isLogin && (
            <Route path='/Home' exact>
               <Home />
            </Route>
           )}


            {isLogin && (
               <Route path="/Product" exact>
                  {state && <MainCard show={state} onHide={closeHandle} />}
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
         <Footer />
      </>
   );
}

export default App;
