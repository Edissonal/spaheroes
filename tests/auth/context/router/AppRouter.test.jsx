import { render,screen } from "@testing-library/react";
import { AuthContext } from "../../../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../../../src/router/AppRouter";
describe('pruebas en ', () => { 

    test('debe de mostrar el login si no esta utenticado', () => { 
      
        const contextValue={
                logged:false    
        }

        render(
        <MemoryRouter initialEntries={['/marvel']}>
        <AppRouter/>
        <AuthContext.Provider value={{contextValue}}></AuthContext.Provider>
        </MemoryRouter>
      )  
       expect(screen.getAllByText('Login').length).toBe(2);

    })

    test('debe  de mostrar el componente de marvel si esta autenticado', () => { 
        const contextValue={
            logged:false,
            user:{
                id:'ABC',
                name:'Juan Carlos'
            }   
    }

    render(
    <MemoryRouter initialEntries={['/login']}>
    <AppRouter/>
    <AuthContext.Provider value={{contextValue}}></AuthContext.Provider>
    </MemoryRouter>
  )  
    expect(screen.getAllByAltText('Marvel').length).toBeGreaterThanOrEqual(1);


     })
    
 })