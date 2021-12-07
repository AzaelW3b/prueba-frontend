import React, { useContext } from 'react';
import ArticulosContext from '../../context/articulos/ArticulosContext';

const Articulo = ({ articulo, abrirModal }) => {
    const { eliminarArticulo, obtenerArticuloActual } = useContext(ArticulosContext);

  
    // const seleccionarArticulo = articulo => {
    //     obtenerArticuloActual(articulo);
    //     abrirModal();
    // }
    return (
        <>
                {/* <button
                    onClick={() => seleccionarArticulo(articulo)}
                >
                    Editar
                </button>
                <button
                    onClick={() => eliminarArticulo(articulo.id)}
                >
                    Eliminar
                </button> */}
        </>
    );
}

export default Articulo;
