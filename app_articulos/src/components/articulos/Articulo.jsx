import React,{useContext} from 'react';
import ArticulosContext from '../../context/articulos/ArticulosContext';
const Articulo = ({articulo}) => {
    const {eliminarArticulo} = useContext(ArticulosContext);
    return (  
        <>
            <div>
                <p>{articulo.nombre}</p>
                <p>{articulo.costo}</p>
                <p>{articulo.iva}</p>
                <p>{articulo.precio}</p>
                <button>Editar</button>
                <button
                   onClick={()=>eliminarArticulo(articulo.id)}
                >
                    Eliminar
                </button>
            </div>
        </>
    );
}
 
export default Articulo;
