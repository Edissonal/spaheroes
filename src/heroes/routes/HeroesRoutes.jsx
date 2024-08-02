import React from 'react'
import { Navbar } from '../../ui/components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage,DcPage, HeroPage, SearchPage } from '../../pages'
import { LoginPage } from '../../auth/pages'


export const HeroesRoutes = () => {
  return (
        <>
         <Navbar/>
         <div className='container'>
         <Routes>
           <Route path="marvel"  element={<MarvelPage />}/>
           <Route path="dc"  element={<DcPage />}/> 
            <Route path="login"  element={<LoginPage />}/> 
            <Route path="search"  element={<SearchPage />}/> 
            <Route path="hero/:id"  element={<HeroPage />}/> 
            <Route path="/"  element={<Navigate to="/marvel" />}/> 
         </Routes>
         </div>

        </>
  )
}
