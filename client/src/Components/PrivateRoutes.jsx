import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoutes = ({children}) => {

    const {isAuth}=useContext(AuthContext)
    const location=useLocation()

      if(!isAuth){
        return <Navigate to="/login" state={location.pathname} replace/>
      }else
        return children
      
       

  
}
