
import './App.css';
import Product from './component/product/Product';
import Header from './component/Header/Header';
import MainCard from './component/Card/MainCard';
import { useState } from 'react';
import MainNavbar from './component/Header/MainNavbar';
import ContextProvider from './Store/ContextProvider';
import { Route } from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
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
         <Route path='/Home'>
            <Home />
         </Route>
         <Route path="/Product">
            {state && <MainCard show={state} onHide={closeHandle} />}  
            <Product />
         </Route>
         <Route path='/About'>
           <About/>
         </Route>
      </ContextProvider>
   );
}

export default App;
