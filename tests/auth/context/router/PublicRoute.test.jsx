import { render,screen } from "@testing-library/react";
import { PublicRoute }  from '../../../../src/router/PublicRoute';
import { AuthContext } from "../../../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en Public Route', () => { 

    test('debe de mostrar el children si no esta autenticado', () => { 

        const contextValue={
            logged:false
        }

        render(
          <AuthContext.Provider value={contextValue}>
              <PublicRoute><h1>Ruta publica</h1></PublicRoute>
          </AuthContext.Provider>
            
    );
    expect(screen.getByText('Ruta publica')).toBeTruthy();
    //screen.debug()
     })

     test('debe de mostrar el children si no esta autenticado', () => { 

        const contextValue={
            logged:true,
            user:{
                name:'strider',
                id:'sajdkjash'
            }
        }
        render(
           
            <AuthContext.Provider value={contextValue}>
                 <MemoryRouter initialEntries={contextValue}>
                    <Routes path='marvel' element={<h1>Pagina Marvel</h1>}></Routes>
                    <Routes path='login' element={
                            <PublicRoute><h1>Ruta publica</h1></PublicRoute>
                    } ></Routes>

                 </MemoryRouter>
                
            </AuthContext.Provider>
    
      );
      expect(screen.getAllByAltText()).toBeTruthy();
     })


 })