import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../Pages/Landing-page/LandingPage';
import { Login } from '../Pages/Login';
import { SignUp } from '../Pages/SignUp';


const AllRoutes = () => {
  return (
    <>
  
    <Routes>
     <Route path="/" element={<LandingPage/>} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<SignUp />} />
    </Routes>
    </>
  )
}

export default AllRoutes;


// <div>AllRoutes
// </div>