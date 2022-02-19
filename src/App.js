import { useState, useEffect } from 'react';
import Reservation from './components/Reservation';
import Confirmation from './components/Confirmation';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import EditOrder from './components/EditOrder';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './files/routes/Home';
import About from './files/routes/About';
import Contact from './files/routes/Contact';
import Menu from './components/menu/Menu';
import Cart from './components/menu/Cart';
import { useCart } from 'react-use-cart';

function App() {
  const [orders, setOrders] = useState([])
  const {
    addItem,
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
 } = useCart()

// let getOrders = async () => {
//   let data = await fetch('http://localhost:4000')
//   let json = await data.json()
//   if(json){
//     setOrders(json)
//   }
// }

// useEffect(()=>{
//   getOrders()

// },[])

let addOrder = (order) =>{
  setOrders([...orders, order])
}

  return (
    <div>

      <Routes>
        <Route path='/reservation' element={<Reservation addOrder={addOrder} /> } />
        <Route path='/reservation/:id' element={<Confirmation setOrders={setOrders}/>} />
        <Route path='/edit/:id' element={<EditOrder setOrders={setOrders} />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={  <Menu totalItems={totalItems} addItem={addItem}/>} />
        <Route path='/menu/cart' element={<Cart 
          isEmpty={isEmpty}
          totalUniqueItems={totalUniqueItems}
          items={items}
          totalItems={totalItems}
          cartTotal={cartTotal}
          updateItemQuantity={updateItemQuantity}
          removeItem={removeItem}
          emptyCart={emptyCart}
        /> } />
      </Routes>

    </div>
    
  );
}

export default App;
