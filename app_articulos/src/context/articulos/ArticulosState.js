import React, { useReducer } from 'react';
import ArticulosReducer from './ArticulosReducer';
import ArticulosContext from './ArticulosContext';
import {
    AGREGAR_ARTICULOS,
} from '../../types/';
const ArticulosState = props => {

    const stateInicial = {
        articulos: [
            { id: 1, nombre: 'Jabon', costo: 300.00,precio: 348 }
        ],
    }
    const [state, dispatch] = useReducer(ArticulosReducer, stateInicial);

    const agregarArticulos = articulo =>{
        dispatch({
            type:AGREGAR_ARTICULOS,
            payload:articulo,
        })
    }
    return (
        <ArticulosContext.Provider
            value={{
                articulos: state.articulos,
                agregarArticulos,
            }}
        >
            {props.children}
        </ArticulosContext.Provider>

    )

}




export default ArticulosState;