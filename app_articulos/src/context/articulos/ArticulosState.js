import React, { useReducer } from 'react';
import ArticulosReducer from './ArticulosReducer';
import ArticulosContext from './ArticulosContext';
import {
    AGREGAR_ARTICULOS,
    ERROR_FORMULARIO,
    ELIMINAR_ARTICULO
} from '../../types/';
const ArticulosState = props => {

    const stateInicial = {
        articulos: [
            { id: 1, nombre: 'Jabon', costo: 300.00,precio: 348 }
        ],
        errorformulario: false,
        articuloseleccionado:null,

    }
    const [state, dispatch] = useReducer(ArticulosReducer, stateInicial);

    const agregarArticulos = articulo =>{
        dispatch({
            type:AGREGAR_ARTICULOS,
            payload:articulo,
        })
    }

    const eliminarArticulo = id =>{
        dispatch({
            type:ELIMINAR_ARTICULO,
            payload:id,
        })
    }

    const mostrarError = () =>{
        dispatch({
            type:ERROR_FORMULARIO,
        })
    }
    return (
        <ArticulosContext.Provider
            value={{
                articulos: state.articulos,
                errorformulario: state.errorformulario,
                agregarArticulos,
                eliminarArticulo,
                mostrarError
            }}
        >
            {props.children}
        </ArticulosContext.Provider>

    )

}




export default ArticulosState;