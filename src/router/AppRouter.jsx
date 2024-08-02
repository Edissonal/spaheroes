import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { Navbar } from '../ui/components';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';




export const AppRouter = () => {
  return (
     <>
     <Routes>
        <Route path="login"  element={<LoginPage />}/> 
        <Route path="/*"  element={
        <PrivateRoute>
               <HeroesRoutes />
        </PrivateRoute>
      }/> 

      {/*<Route path="/*"  element={<HeroesRoutes />}/> */}
     </Routes>
     </>
  )
}
