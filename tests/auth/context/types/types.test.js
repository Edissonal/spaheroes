describe('pruebas en types js', () => { 

    test('debe de regresar estos tyoes',()=>{

        expect(types).toEqual({
            login:'[Auth] Login',
            logout:'[Auth] Logout' 
        })
        
    })

 })