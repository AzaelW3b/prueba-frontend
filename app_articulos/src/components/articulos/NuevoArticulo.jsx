// import React, { useContext } from 'react';
import React from 'react';
import { Formik } from 'formik';
// import { v4 as uuidv4 } from 'uuid';
// import ArticulosContext from '../../context/articulos/ArticulosContext';
const NuevoArticulo = ({ cerrarModal }) => {
    // const [articulo, guardarArticulo] = useState({
    //     nombre: '',
    //     iva: '',
    //     costo: '',
    //     precio: '',
    // });
    // const { agregarArticulos, articuloseleccionado, editarArticulo } = useContext(ArticulosContext);

    // useEffect(() => {
    //     if (articuloseleccionado != null) {
    //         guardarArticulo(articuloseleccionado);
    //     } else {
    //         guardarArticulo({
    //             nombre: '',
    //             iva: '',
    //             costo: '',
    //             precio: '',
    //         })
    //     }
    // }, [articuloseleccionado]);

    // const { nombre, costo, precio } = articulo;
    // const crearArticulo = e => {
    //     e.preventDefault();

    //     if (articuloseleccionado === null) {
    //         articulo.id = uuidv4();
    //         agregarArticulos(articulo);
    //         // guardarArticulo({
    //         //     nombre: '',
    //         //     iva: '',
    //         //     costo: '',
    //         //     precio: '',
    //         // });
    //     } else {
    //         editarArticulo(articulo);
    //     }

    // }
    return (
        //rederización del formulario
        <Formik
            initialValues={{
                nombre: '',
                iva: '',
                costo: '',
                precio: '',
            }}
            validate={(valores) => {
                let errores = {};
                if (!valores.nombre) {
                    errores.nombre = 'Debes ingresar el nombre del producto';
                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(valores.nombre)){
                    errores.nombre='El nombre del producto debe tener menos de 30 caracteres y no debe incluir numeros';
                }

                if(!/^(\d|-)?(\d|,)*\.?\d*$/.test(valores.costo)){
                    errores.costo = 'Debe ingresar solo numeros decimales' 
                }
                return errores;
            }}
            onSubmit={(valores) => {
                console.log(valores);
            }}
        >
            {({ values, errors, handleSubmit, handleChange }) => (
                <form className="formulario" onSubmit={handleSubmit}>
                    <h1>Nuevo Articulo</h1>
                    <div className="input">
                        <label htmlFor="">Nombre</label>
                        <input
                            name="nombre"
                            type="text"
                            placeholder="Nombre del producto"
                            onChange={handleChange}
                            // onChange={(e) => guardarArticulo({ ...articulo, [e.target.name]: e.target.value })}
                            value={values.nombre}
                        />
                        {errors.nombre && <div className="mensaje-error"><p>{errors.nombre}</p> </div>}
                    </div>
                    <div className="input">
                        <label htmlFor="">Costo</label>
                        <input
                            type="number"
                            name="costo"
                            step="0.1"
                            onChange={handleChange}
                            // onChange={(e) => guardarArticulo({ ...articulo, [e.target.name]: parseFloat(e.target.value) })}
                            value={values.costo ||   values.precio / 1.16}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="">Iva 16%</label>
                        <input
                            name="iva"
                            type="number"
                            step="0.1"
                            readOnly
                            value={values.costo * 1.16 || values.precio / 1.16}

                        />
                    </div>
                    <div className="input">
                        <label htmlFor="">precio</label>
                        <input
                            type="number"
                            name="precio"
                            onChange={handleChange}
                            step="0.1"
                            // onChange={(e) => guardarArticulo({ ...articulo, [e.target.name]: parseFloat(e.target.value) })}
                            value={(values.precio) ||( values.iva + values.costo)}
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
            )}
        </Formik>
    );
}

export default NuevoArticulo;