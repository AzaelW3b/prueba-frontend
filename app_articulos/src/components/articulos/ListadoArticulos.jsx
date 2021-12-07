import React, { useState, useContext } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import NuevoArticulo from './NuevoArticulo';
import ArticulosContext from '../../context/articulos/ArticulosContext';
import MaterialTable from "@material-table/core";
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
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

    const { articulos,quitarSeleccionado,  eliminarArticulo, obtenerArticuloActual } = useContext(ArticulosContext);

    const mostrarModal = () =>{
        quitarSeleccionado();
        abrirModal();
    }
    
    //datos de la tabla
    const columnas = [
        {
            title:'Nombre del producto',
            field:'nombre'
        },
        {
            title:'Costo',
            field:'costo',
            type:'numeric'
        },
        {
            title:'Iva',
            field:'iva',
            type:'numeric'
        },
        {
            title:'Precio',
            field:'precio',
            type:'numeric'
        },

    ];
    return (
        <div className="listado-articulos contenedor">
            <div className="btn-articulo">
                <button
                    onClick={mostrarModal}
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
                <MaterialTable
                    style={{padding:20, marginTop:20}}
                    options={{
                        rowStyle:{
                            fontSize:20,
                        },
                        headerStyle:{
                            fontSize:20,
                            backgroundColor:'#2b2d42',
                            color:'#fff'
                        },
                        searchFieldStyle:{
                            fontSize:20,
                        }
                        
                    }}
                    columns={columnas}
                    data ={articulos}
                    title="Listado de Articulos"
                    localization={{toolbar:{searchTooltip:'Busqueda',
                    searchPlaceholder:'Busca un articulo'}}}
                    actions={[
                        {
                          icon: Edit,
                          iconProps: { style: { fontSize: "54px", color: "green" } },
                          tooltip: 'Editar usuario',
                          onClick: (event, rowData) => {
                            obtenerArticuloActual(rowData);
                            abrirModal();
                                
                          }
                        },
                        {
                            icon: DeleteOutline,
                            tooltip: 'Eliminar usuario',
                            onClick: (event, rowData) => {
                                eliminarArticulo(rowData.id);
                            }
                          },
                        
                      ]}
                >
                </MaterialTable>}
        </div>
    );
}

export default ListadoArticulo;