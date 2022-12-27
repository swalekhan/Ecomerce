
import './App.css';
import Product from './component/product/Product';
import Header from './component/Header/Header';
import MainCard from './component/Card/MainCard';
import { useState } from 'react';
import MainNavbar from './component/Header/MainNavbar';
import ContextProvider from './Store/ContextProvider';

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
         {state && <MainCard show={state} onHide={closeHandle} />}
         <Header />
         <Product />
      </ContextProvider>
   );
}

export default App;
