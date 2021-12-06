import React from 'react';
import SideBar from './SideBar';
import Barra from '../Layout/Barra';
import ListadoArticulo from '../articulos/ListadoArticulos';
const PaginaPrincipal = () => {
    return (
        <>
            <div className="contenedor-app">
                <SideBar />
                <div className="seccion-principal">
                    <Barra />
                    <ListadoArticulo />
                </div>
            </div>

        </>
    );
}

export default PaginaPrincipal;