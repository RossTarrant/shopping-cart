import '../src/index.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import ShopItem from './components/ShopItem';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [basket, setBasket] = useState([]);

  return (
    <div className={"min-h-screen bg-white"}> 
      <BrowserRouter>
        <Header basket={basket}/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/:id" element={<ShopItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
