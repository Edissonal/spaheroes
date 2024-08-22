import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { Navbar } from '../ui/components';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';




export const AppRouter = () => {
  return (
     <>
     <Routes>

     <Route path="login/*"  element={
        <PublicRoute>
           {/*<LoginPage/>*/}
           <Routes>
           <Route path="/*"  element={<LoginPage />}/> 
           </Routes>
        </PublicRoute>
      }/> 
      
        <Route path="/*"  element={
        <PrivateRoute>
               <HeroesRoutes />
        </PrivateRoute>
      }/> 

      {/*<Route path="/*"  element={<HeroesRoutes />}/> 
              <Route path="login"  element={<LoginPage />}/> 
      */}
     </Routes>
     </>
  )
}
