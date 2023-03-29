import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Login } from '../Pages/Login';
import { SignUp } from '../Pages/SignUp';

const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}

export default AllRoutes;