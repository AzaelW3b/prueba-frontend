import React, { useContext } from 'react';
import ArticulosContext from '../../context/articulos/ArticulosContext';
import NuevoArticulo from './NuevoArticulo';
const Articulo = ({ articulo }) => {
    const { eliminarArticulo, obtenerArticuloActual } = useContext(ArticulosContext);

    const seleccionarArticulo = articulo => {
        obtenerArticuloActual(articulo);
    }
    return (
        <>
            <div>
                <p>{articulo.nombre}</p>
                <p>{articulo.costo}</p>
                <p>{articulo.iva}</p>
                <p>{articulo.precio}</p>
                <button
                    onClick={() => seleccionarArticulo(articulo)}
                >
                    Editar
                </button>
                <button
                    onClick={() => eliminarArticulo(articulo.id)}
                >
                    Eliminar
                </button>
            </div>
        </>
    );
}

export default Articulo;
