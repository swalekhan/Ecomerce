
import './App.css';
import Product from './component/product/Product';
import Header from './component/Header/Header';
import MainCard from './component/Card/MainCard';
import { useContext, useState } from 'react';
import MainNavbar from './component/Header/MainNavbar';
import ContextProvider from './Store/ContextProvider';
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

   const showHandler = () => {
      setState(true);
   }
   const closeHandle = () => {
      setState(false)
   }

   const alertHandler = (a) => {
      setAlert(a)
      console.log(a)
      setTimeout(() => { setAlert(false) }, 1000)
   }

   let isLogin = !abc.token
   console.log("app",abc.token)
   return (
      <ContextProvider>
         <MainNavbar onShow={showHandler} />
         {alert && < MainAlert />}
         <Header />
         <Switch>
            <Route path='/' exact>   
               <Redirect to='/Login' />
            </Route>

            <Route path='/Home' exact>
               <Home />
            </Route>

            {isLogin && (
               <Route path="/Product" exact>
                  {state && <MainCard show={state} onHide={closeHandle} />}
                  <Product alertHandler={alertHandler} />
               </Route>)}

            <Route path='/About' exact>
               <About />
            </Route>

            <Route path='/Contact' exact>
               <Contact />
            </Route>

            <Route path='/Login' exact>
               <Login />
            </Route>

            <Route path='/SingleProduct/:id' exact>
               <SingleProduct />
            </Route>
         </Switch>

         <Footer />
      </ContextProvider>
   );
}

export default App;
