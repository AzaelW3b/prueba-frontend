import {
    AGREGAR_ARTICULOS,
} from '../../types/';

const ArticulosReducer = (state, action) =>{
    switch(action.type){
        case AGREGAR_ARTICULOS:
            return{
                ...state,
                articulos:[ ...state.articulos, action.payload],
            }
        default:
            return state;

    }
}
export default  ArticulosReducer;