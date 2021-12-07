import React from 'react';
import 'normalize.css';
import './sass/app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticulosState from './context/articulos/ArticulosState';
import PaginaPrincipal from './components/Layout/PaginaPrincipal';
function App() {
  return (
    <ArticulosState>
      <Router>
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal />} />
        </Routes>
      </Router>
    </ArticulosState>
  );
}

export default App;
