import React, { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({children}) => {
  
  const {logged} = useContext(AuthContext);

  console.log(logged);
        return (!logged == true)
        ? children
        : <Navigate to="/marvel" />
}
