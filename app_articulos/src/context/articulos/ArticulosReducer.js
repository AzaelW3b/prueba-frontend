import {
    AGREGAR_ARTICULOS,
    ARTICULO_ACTUAL,
    ELIMINAR_ARTICULO,
    EDITAR_ARTICULO,
    DESMARCAR_ARTICULO,
    ERROR_FORMULARIO,
} from '../../types/';

const ArticulosReducer = (state, action) =>{
    switch(action.type){
        case AGREGAR_ARTICULOS:
            return{
                ...state,
                articulos:[ ...state.articulos, action.payload],
            }
        case ELIMINAR_ARTICULO:
            return{
                ...state,
                articulos: state.articulos.filter( articulo => articulo.id !== action.payload)
            }
        case ARTICULO_ACTUAL:
            return{
                ...state,
                articuloseleccionado: action.payload
            }
        case EDITAR_ARTICULO:
            return {
                ...state,
                articulos: state.articulos.map(articulo=> articulo.id === action.payload.id ? action.payload : articulo),
               
            }
        case DESMARCAR_ARTICULO:
            return{
                ...state,
                articuloseleccionado: null,
            }
        case ERROR_FORMULARIO:
            return{
                ...state,
                errorformulario: true,
            }
        default:
            return state;

    }
}
export default  ArticulosReducer;