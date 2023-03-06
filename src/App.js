import '../src/index.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import ShopItem from './components/ShopItem';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [basket, setBasket] = useState([]);
  const [basketQuantity, setBasketQuantity] = useState(0);

  useEffect(() => {
    let basketItemCount = 0;
    for(let item of basket){
      basketItemCount += item.quantity;
    }
    setBasketQuantity(basketItemCount);
  }, [basket])

  const onAddToBasket = (item) => {
    let updatedBasket = [...basket];
    updatedBasket.push(item);
    setBasket(updatedBasket);
  }

  const removeFromBasket = (id) => {
    let updatedBasket = [...basket];
    updatedBasket = updatedBasket.filter((item) => {
      return item.id !== id ? true : false;
    })
    setBasket(updatedBasket);
  }

  const resetBasket = () => {
    setBasket([]);
  }

  const changeQuantity = (id, button) => {
    let updatedBasket = [...basket];
    for(let i = 0; i < updatedBasket.length; i++){
      if(updatedBasket[i].id === id){
        updatedBasket[i].quantity = button === '+' ? updatedBasket[i].quantity + 1 : (updatedBasket[i].quantity != 0 ? updatedBasket[i].quantity - 1 : updatedBasket[i].quantity);
      }
    }
    setBasket(updatedBasket);
  }

  return (
    <div className={"bg-white"}> 
      <BrowserRouter>
        <Header basketQuantity={basketQuantity}/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopItem addToBasket={onAddToBasket}/>} />
          <Route path="/cart" element={<Cart basket={basket} resetBasket={resetBasket} changeQuantity={changeQuantity} removeFromBasket={removeFromBasket}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
