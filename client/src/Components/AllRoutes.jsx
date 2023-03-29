import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../Pages/Landing-page/LandingPage';

const AllRoutes = () => {
  return (
   <>
   <Routes>
<Route path="/" element={<LandingPage/>}/>
   </Routes>
   </>
  )
}

export default AllRoutes;


// <div>AllRoutes
// </div>