import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({children}) => {

    const {isAuth}=useContext(AuthContext)

      if(!isAuth){
        return <Navigate to="/login" />
      }else
        return children
      
       

  
}
