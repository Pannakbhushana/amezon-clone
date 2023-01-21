import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {status}=useContext(AuthContext);
    
if(status===false){
  return  <Navigate to="/userlogin" />
}
  return children
}

export default PrivateRoute
