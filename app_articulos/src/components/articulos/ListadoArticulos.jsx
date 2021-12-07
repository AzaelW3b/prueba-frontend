import React, { useState, useContext } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import NuevoArticulo from './NuevoArticulo';
import ArticulosContext from '../../context/articulos/ArticulosContext';
import Articulo from './Articulo';
const ListadoArticulo = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 10,
        borderRadius: 2,
        p: 4,
    };
    const [abrir, manipularAbrir] = useState(false);
    const abrirModal = () => manipularAbrir(true);
    const cerrarModal = () => manipularAbrir(false);

    const { articulos } = useContext(ArticulosContext);

    return (
        <div className="listado-articulos contenedor">
            <div className="btn-articulo">
                <button
                    onClick={abrirModal}
                >
                    Agregar articulo
                </button>
                <Modal
                    open={abrir}
                    onClose={cerrarModal}
                >
                    <Box sx={style}>
                        <NuevoArticulo />
                    </Box>
                </Modal>
            </div>

            {articulos.length === 0 ? <p>No hay articulos registrados</p> :
                <div className="lista-articulos">
                    {(articulos.map(articulo =>
                        <Articulo
                            key={articulo.id}
                            articulo={articulo}
                        />
                    ))}
                </div>}
        </div>
    );
}

export default ListadoArticulo;