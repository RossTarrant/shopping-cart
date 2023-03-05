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
  const [basketQuantity, setBasketQuantity] = useState(0);
  const [basketVisible, setBasketVisible] = useState(false);

  const onAddToBasket = (item) => {
    let currentBasket = [...basket];
    currentBasket.push(item);
    setBasketQuantity(basketQuantity + item.quantity);
    setBasket(currentBasket);
  }

  const onSwitchBasketView = () => {
    setBasketVisible(!basketVisible);
  }

  return (
    <div className={"bg-white"}> 
      <BrowserRouter>
        <Header basketQuantity={basketQuantity} switchBasketView={onSwitchBasketView}/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopItem addToBasket={onAddToBasket}/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
