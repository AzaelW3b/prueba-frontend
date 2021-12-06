import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const ListadoArticulo = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    const [abrir, manipularAbrir] = useState(false);

    const abrirModal = () => manipularAbrir(true);
    const cerrarModal = () => manipularAbrir(false);
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
                        <form>
                            <div className="input">
                                <label htmlFor="">Producto</label>
                                <input type="text" placeholder="Nombre del producto" />
                            </div>
                        </form>
                    </Box>
                </Modal>
            </div>


        </div>
    );
}

export default ListadoArticulo;