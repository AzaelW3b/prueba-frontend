import React, { useContext, useState } from 'react';
import ArticulosContext from '../../context/articulos/ArticulosContext';
const NuevoArticulo = () => {
    const [articulo, guardarArticulo] = useState({
        nombre: '',
        iva: 0.0,
        costo: 0.0,
        precio: 0.0,
    });
    const { agregarArticulos } = useContext(ArticulosContext);

    const { nombre, costo, precio} = articulo;


 
    const crearArticulo = e => {
        e.preventDefault();
        if (nombre.trim() === '' || costo === 0) {
            console.log('Todos los campos son obligatorios');
            return;
        }
        articulo.id = 230;
        articulo.precio = articulo.iva + costo
        console.log(articulo);
        agregarArticulos(articulo);
    }
    return (
        <form className="formulario">
            <div className="input">
                <label htmlFor="">Nombre</label>
                <input
                    name="nombre"
                    type="text"
                    placeholder="Nombre del producto"
                    onChange={(e) => guardarArticulo({ ...articulo, [e.target.name]: e.target.value })}
                    value={nombre}
                />
            </div>
            <div className="input">
                <label htmlFor="">Costo</label>
                <input
                    type="number"
                    name="costo"
                    onChange={(e) => guardarArticulo({ ...articulo, [e.target.name]: parseFloat(e.target.value) })}
                    value={costo}
                />
            </div>
            <div className="input">
                <label htmlFor="">Iva 16%</label>
                <input
                    name="iva"
                    type="number"
                    min="0"
                    step="0.1"
                    readOnly
                    value={articulo.iva = costo * 0.16}

                />
            </div>
            <div className="input">
                <label htmlFor="">precio</label>
                <input
                    type="number"
                    name="precio"
                    onChange={(e) => guardarArticulo({ ...articulo, [e.target.name]: parseFloat(e.target.value) })}
                    value={precio}

                />
            </div>
            <div className="formulario-botones">
                <input
                    type="submit"
                    value="cancelar"
                />
                <input
                    type="submit"
                    value="Crear articulo"
                    onClick={crearArticulo}
                />
            </div>
        </form>
    );
}

export default NuevoArticulo;