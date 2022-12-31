
import './App.css';
import Product from './component/product/Product';
import Header from './component/Header/Header';
import MainCard from './component/Card/MainCard';
import { useState } from 'react';
import MainNavbar from './component/Header/MainNavbar';
import ContextProvider from './Store/ContextProvider';
import { Route, Switch } from 'react-router-dom'
// import Home from './Home/Home';
import About from './About/About';
import Contact from './contact/Contact';
import SingleProduct from './component/product/DynamicPage/SingleProduct';
import Login from './Login/Login';
import Footer from './component/Footer/Footer';
import MainAlert from './component/Alert/Alert';


function App() {
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
      setTimeout(()=>{setAlert(false)},1000)
  }
   // console.log("app",abc.alert)
   return (
      <ContextProvider>
         <MainNavbar onShow={showHandler} />
         {alert && < MainAlert/>}
         <Header />
         {/* <Route path='/Home'>
            <Home />
         </Route> */}
         <Switch>
            <Route path="/Product">
               {state && <MainCard show={state} onHide={closeHandle} />}
               <Product alertHandler = {alertHandler}/>
            </Route>
            <Route path='/About'>
               <About />
            </Route>
            <Route path='/Contact'>
               <Contact />
            </Route>

            <Route path='/Login'>
               <Login />
            </Route>

            <Route path='/SingleProduct/:id'>
               <SingleProduct />
            </Route>
         </Switch>
         <Footer/>
      </ContextProvider>
   );
}

export default App;
