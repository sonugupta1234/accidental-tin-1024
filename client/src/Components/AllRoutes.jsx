import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Cart } from '../Pages/Cart';
import { Checkout } from '../Pages/Checkout';
import { Login } from '../Pages/Login';
import { SignUp } from '../Pages/SignUp';

const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<SignUp />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/checkout/address" element={<Checkout />} />
    </Routes>
  )
}

export default AllRoutes;


// <div>AllRoutes
// </div>