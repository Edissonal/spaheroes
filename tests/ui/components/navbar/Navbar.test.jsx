
import { fireEvent, render,screen } from "@testing-library/react";
import { AuthContext } from "../../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../../src/ui/components";

 const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));
//useNavigate

describe('pruebas en el componente de navbar', () => { 
    const contextValue={
        logged:true,
        user:{
            name:'Juan Carlos'
        },
        logout:jest.fn()
    }

    beforeEach(()=>jest.clearAllMocks());

    test('debe mostrar el nombre del usuario', () => { 

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        //expect(screen.getByText('Juan Carlos')).toBeTruthy();
        
        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith( "/login", {"replace": true});
     })

//    test('debe llamar el logout de navigate', () => { second });

 })