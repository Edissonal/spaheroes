import { MemoryRouter, useNavigate } from "react-router-dom";

import { fireEvent, render,screen } from "@testing-library/react";
import { SearchPage } from "../../../src/pages/SearchPage";

describe('prueba del componente', () => { 

    test('debe mostrarse correctamente con valores por defecto', () => { 

        render(
            <MemoryRouter>
                <SearchPage></SearchPage>
            </MemoryRouter>
        )

        screen.debug();
     })
 })