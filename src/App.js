
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
import Contact from './component/contact/Contact';
import SingleProduct from './component/product/DynamicPage/SingleProduct';
import Login from './component/Login/Login';
function App() {
   const [state, setState] = useState(false)
   const showHandler = () => {
      console.log("close")

      setState(true);
   }
   const closeHandle = () => {
      console.log("close")
      setState(false)
   }

   return (
      <ContextProvider>
         <MainNavbar onShow={showHandler} />
         <Header />
         {/* <Route path='/Home'>
            <Home />
         </Route> */}
         <Switch>
         <Route path="/Product">
            {state && <MainCard show={state} onHide={closeHandle} />}
            <Product />
         </Route>
         <Route path='/About'>
            <About />
         </Route>
         <Route path='/Contact'>
            <Contact />
         </Route>
         
         <Route path='/Login'>
            <Login/>
         </Route>

         <Route path='/SingleProduct/:id'>
            <SingleProduct />
         </Route>
         </Switch>
      </ContextProvider>
   );
}

export default App;
