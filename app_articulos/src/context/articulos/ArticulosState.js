import React, { useReducer } from 'react';
import ArticulosReducer from './ArticulosReducer';
import ArticulosContext from './ArticulosContext';
const ArticulosState = props => {

    const stateInicial = {
        articulos: [],
    }
    const [state, dispatch] = useReducer(ArticulosReducer, stateInicial);

    return (
        <ArticulosContext.Provider>
            {props.children}
        </ArticulosContext.Provider>

    )

}




export default ArticulosState;