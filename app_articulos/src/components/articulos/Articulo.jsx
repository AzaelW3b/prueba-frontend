import React from 'react';
const Articulo = ({articulo}) => {
    return (  
        <>
            <p>{articulo.nombre}</p>
            <p>{articulo.costo}</p>
            <p>{articulo.iva}</p>
            <p>{articulo.precio}</p>
            <button>Editar</button>
            <button>Eliminar</button>
        </>
    );
}
 
export default Articulo;
