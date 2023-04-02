import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../Pages/Landing-page/LandingPage'
import { Cart } from '../Pages/Cart';
import { Checkout } from '../Pages/Checkout'
import { Login } from '../Pages/Login';

import { Payment } from '../Pages/Payment';

import Products from '../Pages/Products/Products';

import { SignUp } from '../Pages/SignUp';

import { PrivateRoutes } from './PrivateRoutes';

import SinglePage from '../Pages/DetailsPages/SinglePage';
import Admin from "../Pages/Admin"



const AllRoutes = () => {
  return (
    <>
     
    <Routes>
     <Route path="/" element={<LandingPage/>} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<SignUp />} />
        <Route path="/admin" element={<Admin/>} />
       <Route path="/cart/:id" element={<Cart />} />
       <Route path="/products/:id" element={<SinglePage/>} />
       <Route path="/cart/:id" element={<PrivateRoutes><Cart /></PrivateRoutes>} />     
       <Route path="/detailsPage/:id" element={<SinglePage/>} />
       <Route path="/products" element={<Products/>} />
       <Route path="/checkout/address" element={<Checkout />} />
       <Route path="/checkout/payment" element={<Payment />} />
    </Routes>
    </>
  )
}

export default AllRoutes;


// <div>AllRoutes
// </div>