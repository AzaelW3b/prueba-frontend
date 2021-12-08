import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ArticulosContext from '../../context/articulos/ArticulosContext';
const NuevoArticulo = ({ cerrarModal }) => {
    const [articulo, guardarArticulo] = useState({
        nombre: '',
        iva: '',
        costo: '',
        precio: '',
    });
    const { agregarArticulos, articuloseleccionado, editarArticulo, mostrarError, errorformulario } = useContext(ArticulosContext);

    useEffect(() => {
        if (articuloseleccionado !== null) {
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

    let { nombre, costo, precio, iva } = articulo;

    const crearArticulo = e => {
        e.preventDefault();

        if (!nombre) {
            mostrarError();
            return;
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(nombre)) {
            mostrarError();
            return;
        }
        if(!/^(\d|-)?(\d|,)*\.?\d*$/.test(costo)){
            console.log('solo decimales')
            return;
        }
        if (articuloseleccionado === null) {
            articulo.id = uuidv4();
            // articulo.costo = articulo.costo || (precio / 1.16);
            articulo.iva = costo * 0.16 || Math.abs((precio / 1.16) - precio).toFixed(2);
            articulo.precio = articulo.precio;
            agregarArticulos(articulo);
            guardarArticulo({
                nombre: '',
                iva: '',
                costo: '',
                precio: '',
            });
        } else {
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
                {errorformulario && !nombre ? <p className="mensaje-error">Debes ingresar el nombre del articulo</p> : null}
                {errorformulario && !/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(nombre) ? <p className="mensaje-error">El articulo debe tener maximo 30 caracteres y no debe incluir numeros</p> : null}
            </div>

            <div className="input">
                <label htmlFor="">Costo</label>
                <input
                    type="number"
                    name="costo"
                    onChange={(e) => guardarArticulo({ ...articulo, [e.target.name]: parseFloat(e.target.value) })}
                    value={costo || (precio / 1.16)}
                />
            </div>
            <div className="input">
                <label htmlFor="">Iva 16%</label>
                <input
                    name="iva"
                    type="number"
                    readOnly
                    onChange={(e) => guardarArticulo({ ...articulo, [e.target.name]: e.target.value })}
                    value={costo * 0.16 || Math.abs((precio / 1.16) - precio).toFixed(2)}
                />
            </div>
            <div className="input">
                <label htmlFor="">precio</label>
                <input
                    type="number"
                    name="precio"
                    onChange={(e) => guardarArticulo({ ...articulo, [e.target.name]: parseFloat(e.target.value) })}
                    value={precio || (costo * 0.16) + costo}
                />
            </div>
            <div className="formulario-botones">
                <input
                    type="button"
                    value="cancelar"
                    onClick={cerrarModal}
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