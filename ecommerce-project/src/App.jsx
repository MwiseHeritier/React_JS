import { Routes, Route} from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/ordersPage';
import { TrackingPage } from './pages/TrackingPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css';

function App() {


  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={< CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
       <Route  element={<NotFoundPage />} />
    </Routes>
    
  )
}

export default App

/*
 path="*"
 -------
 -> this matches to any URL path

 */
