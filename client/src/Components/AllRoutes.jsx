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
import Adminproduct from '../Pages/Adminproduct';



const AllRoutes = () => {
  return (
    <>
     
    <Routes>
     <Route path="/" element={<LandingPage/>} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<SignUp />} />
        <Route path="/admin" element={<Admin/>} />

        <Route path="/adminproduct" element={<Adminproduct />} />

       <Route path="/cart" element={<PrivateRoutes><Cart /></PrivateRoutes>} />

      

      
       <Route path="/products/:id" element={<SinglePage/>} />
      
      
       <Route path="/products" element={<Products/>} />

       

       <Route path="/checkout/address" element={<PrivateRoutes><Checkout /></PrivateRoutes>} />
       <Route path="/checkout/payment" element={<PrivateRoutes><Payment /></PrivateRoutes>} />

      
    </Routes>
    </>
  )
}

export default AllRoutes;


// <div>AllRoutes
// </div>