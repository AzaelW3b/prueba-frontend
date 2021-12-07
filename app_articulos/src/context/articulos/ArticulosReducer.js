import {
    AGREGAR_ARTICULOS,
    ELIMINAR_ARTICULO,
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