import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Adminproduct from './Adminproduct'

const AllRoutes1 = () => {
  return (
    <Routes>
    {/* <Route path="/" element={ /> */}
    <Route path="/admin" element={<Admin />} />
    <Route path="/adminproducts" element={<Adminproduct />} />
    </Routes>
  )
}

export default AllRoutes1