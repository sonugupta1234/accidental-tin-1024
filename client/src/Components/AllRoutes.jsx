import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Cart } from '../Pages/Cart';
import { Checkout } from '../Pages/Checkout';
import { Login } from '../Pages/Login';
import { Payment } from '../Pages/Payment';
import { SignUp } from '../Pages/SignUp';

const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<SignUp />} />
       <Route path="/cart/:id" element={<Cart />} />
       <Route path="/checkout/address" element={<Checkout />} />
       <Route path="/checkout/payment" element={<Payment />} />
    </Routes>
  )
}

export default AllRoutes;


// <div>AllRoutes
// </div>