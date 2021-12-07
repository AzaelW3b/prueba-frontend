import React, { useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ArticulosContext from '../../context/articulos/ArticulosContext';
const NuevoArticulo = () => {
    const [articulo, guardarArticulo] = useState({
        nombre: '',
        iva: '',
        costo: '',
        precio: '',
    });
    const { agregarArticulos, articuloseleccionado, editarArticulo } = useContext(ArticulosContext);

    useEffect(() => {
        if (articuloseleccionado != null) {
            guardarArticulo(articuloseleccionado);
        } else {
            guardarArticulo({
                nombre: '',
                iva: '',
                costo: '',
                precio: '',
            })
        }
    }, [articuloseleccionado]);


    const { nombre, costo, precio } = articulo;

    const crearArticulo = e => {
        e.preventDefault();

        if (articuloseleccionado === null) {
            articulo.id = uuidv4();
            agregarArticulos(articulo);
        }else{
            editarArticulo(articulo);
        }

    }
    return (
        <form className="formulario" onSubmit={crearArticulo}>
            <h1>Nuevo Articulo</h1>
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
                    min="0"
                    step="0.1"
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
                    value={articulo.precio = articulo.iva + costo || precio}

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
                />
            </div>
        </form>
    );
}

export default NuevoArticulo;