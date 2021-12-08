import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ArticulosContext from '../../context/articulos/ArticulosContext';

const NuevoArticulo = function ({ cerrarModal }) {
  const [tipoprecio, guardarTipoPrecio] = useState('');
  const [articulo, guardarArticulo] = useState({
    nombre: '',
    iva: '',
    costo: '',
    precio: '',
  });
  const {
    agregarArticulos,
    articuloseleccionado,
    editarArticulo,
    mostrarError,
    errorformulario,
  } = useContext(ArticulosContext);

  useEffect(() => {
    if (articuloseleccionado !== null) {
      guardarArticulo(articuloseleccionado);
    } else {
      guardarArticulo({
        nombre: '',
        iva: '',
        costo: '',
        precio: '',
      });
    }
  }, [articuloseleccionado]);

  const { nombre, costo, precio } = articulo;

  const crearArticulo = (e) => {
    e.preventDefault();

    if (!nombre) {
      mostrarError();
      return;
    }
    if (!/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(nombre)) {
      mostrarError();
      return;

    }
    if (costo <= 0 && isNaN(costo)) {
      mostrarError();
      return;
    }
    if(precio <= 0 && isNaN(precio)){
      mostrarError();
      return;
    }
    if (articuloseleccionado === null) {
      articulo.id = uuidv4();
      articulo.costo = costo || (precio / 1.16).toFixed(2);
      articulo.iva = costo * 0.16 || Math.abs(precio / 1.16 - precio).toFixed(2);
      articulo.precio = precio || costo * 0.16 + costo;
      agregarArticulos(articulo);
      guardarArticulo({
        nombre: "",
        iva: "",
        costo: "",
        precio: "",
      });
    } else {
      editarArticulo(articulo);
    }
  };
  return (
    <form className="formulario" onSubmit={crearArticulo}>
      <h1>Nuevo Articulo</h1>
      <div className="input">
        <label htmlFor="">Nombre</label>
        <input
          name="nombre"
          type="text"
          placeholder="Nombre del producto"
          onChange={(e) =>
            guardarArticulo({ ...articulo, [e.target.name]: e.target.value })
          }
          value={nombre}
        />
        {errorformulario && !nombre ? (
          <p className="mensaje-error">Debes ingresar el nombre del articulo</p>
        ) : null}
        {errorformulario && !/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(nombre) ? (
          <p className="mensaje-error">
            El articulo debe tener maximo 30 caracteres y no debe incluir
            numeros
          </p>
        ) : null}
      </div>
      <div className="input">
        <label htmlFor="tipo">Tipo de precio</label>
        <select id="tipo" onChange={(e) => guardarTipoPrecio(e.target.value)}>
          <option>---Selecciona un tipo de precio---</option>
          <option name="tipo" value="sinIva">
            Precio sin iva
          </option>
          <option name="tipo" value="conIva">
            Precio con iva
          </option>
        </select>
      </div>
      {tipoprecio === 'sinIva' ? (
        <div className="input">
          <label htmlFor="">Costo</label>
          <input
            type="number"
            name="costo"
            step="1.0"
            onChange={(e) =>
              guardarArticulo({
                ...articulo,
                [e.target.name]: parseFloat(e.target.value),
              })
            }
            value={costo ? costo ?? precio / 1.16 : ''}
          />
          {errorformulario && costo <= 0 ? <p className="mensaje-error">Error debes ingresar un costo</p>: null}
        </div>
      ) : tipoprecio === 'conIva' ? (
        <div className="input">
          <label htmlFor="">precio</label>
          <input
            type="number"
            name="precio"
            step="1.0"
            onChange={(e) =>
              guardarArticulo({
                ...articulo,
                [e.target.name]: parseFloat(e.target.value),
              })
            }
            value={precio ? precio ?? costo * 0.16 + costo : ''}
          />
             {errorformulario && precio <= 0 ? <p className="mensaje-error">Error debes ingresar un precio</p>: null}
        </div>
      ) : null}

      <div className="input">
        <label htmlFor="">Iva 16%</label>
        <input
          name="iva"
          type="number"
          readOnly
          onChange={(e) =>
            guardarArticulo({ ...articulo, [e.target.name]: e.target.value })
          }
          value={costo * 0.16 || Math.abs(precio / 1.16 - precio).toFixed(2)}
        />
      </div>

      <div className="formulario-botones">
        <input type="button" value="cancelar" onClick={cerrarModal} />
        <input
          type="submit"
          value={articuloseleccionado ? 'Editar articulo' : 'Crear articulo'}
        />
      </div>
    </form>
  );
};

export default NuevoArticulo;
