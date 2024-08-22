import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('pruebas en el auth reducer', () => { 

    test('debe retornar el estado por defecto', () => { 
        const state =authReducer({logged:false},{});
        expect(state).toEqual({logged:false})
     })

     test('borrar el nombre del usuario', () => { 
        
        const action={ 
            type:types.login,
            payload:{
                name:'juan',
                id:'123'
            }
        }
        
        const state = authReducer({logged:false},action);
        expect(state).toEqual({
            logged:true,
            user:action.payload
        })

  
      })

      test('borrar name del usuario', () => { 
        const state={
            logged:true,
            user:{id:'123',name:'juan'}
        }

        const action={
            type:types.logout
        }
        
        const newState = authReducer(state,action)
        expect(newState).toEqual({logged:false})
     })

 })