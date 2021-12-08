import React, { useReducer } from 'react';
import ArticulosReducer from './ArticulosReducer';
import ArticulosContext from './ArticulosContext';
import {
    AGREGAR_ARTICULOS,
    ERROR_FORMULARIO,
    ELIMINAR_ARTICULO,
    ARTICULO_ACTUAL,
    EDITAR_ARTICULO,
    DESMARCAR_ARTICULO,
} from '../../types/';
const ArticulosState = props => {

    const stateInicial = {
        articulos: [
            { id: 1, nombre: 'Jabon',  costo: 300.00, iva:30,   precio: 348 }
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

    const obtenerArticuloActual = articulo =>{
        dispatch({
            type:ARTICULO_ACTUAL,
            payload:articulo,
        })
    }

    const editarArticulo = articulo =>{
        dispatch({
            type:EDITAR_ARTICULO,
            payload:articulo,
        })
    }
    const mostrarError = () =>{
        dispatch({
            type:ERROR_FORMULARIO,
        })
    }
    const quitarSeleccionado = () =>{
        dispatch({
            type:DESMARCAR_ARTICULO,
        })
    }
    return (
        <ArticulosContext.Provider
            value={{
                articulos: state.articulos,
                errorformulario: state.errorformulario,
                articuloseleccionado:state.articuloseleccionado,
                agregarArticulos,
                eliminarArticulo,
                obtenerArticuloActual,
                editarArticulo,
                quitarSeleccionado,
                mostrarError
            }}
        >
            {props.children}
        </ArticulosContext.Provider>

    )

}




export default ArticulosState;