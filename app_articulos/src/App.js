import React from 'react';
import 'normalize.css';
import './sass/app.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListadoArticulo from './components/articulos/ListadoArticulos';
import ArticulosState from './context/articulos/ArticulosState';
import PaginaPrincipal from './components/Layout/PaginaPrincipal';
function App() {
  return (
    <Router>
      <Routes>
            {/* <Route exact path ="/" element={<ListadoArticulo/>}/> */}
            <Route exact path="/" element={<PaginaPrincipal/>}/>
            
      </Routes>
    </Router>
  );
}

export default App;
