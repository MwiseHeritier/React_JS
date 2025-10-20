import  axios from 'axios';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/ordersPage';
import { TrackingPage } from './pages/TrackingPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css';


function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      });
  }, []);



  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={< CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route element={<NotFoundPage />} />
    </Routes>

  )
}

export default App

/*
 path="*"
 -------
 -> this matches to any URL path

 '/api/cart-items?expand=product'
 -------------------------------
 '?expand=product'
 ----------------
 -> This is called  Querry parameter
 ->Let us add additional information to our request.
 -> When the backend receives this Querry parameter it will
 automatically add product details tothe cart.

 */
