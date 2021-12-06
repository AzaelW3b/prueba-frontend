import React from 'react';
import './sass/app.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListadoArticulo from './components/articulos/ListadoArticulos';
import ArticulosState from './context/articulos/ArticulosState';
function App() {
  return (
    <Router>
      <Routes>
            <Route exact path ="/" element={<ListadoArticulo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
