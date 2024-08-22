
import { render,screen } from "@testing-library/react";
import { AuthContext } from "../../../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../../../../src/ui/components";

describe('pruebas en el componente de navbar', () => { 
    const contextValue={
        logged:true,
        use:{
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
        expect(screen.getByText('Juan Carlos')).toBeTruthy();
     })

//    test('debe llamar el logout de navigate', () => { second });

 })