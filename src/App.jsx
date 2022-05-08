import React, { useState } from 'react';
import Layout from './layouts/Layout'
import LayoutAdmin from './layouts/LayoutAdmin'
import IndexAdmin from './pages/admin/Index';
import Usuarios from './pages/admin/Usuarios'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';
import './styles/globals.css'
import Index from './pages/Index'
import Contacto from './pages/Contacto'

import { DarkContext } from './context/dark';
import Configuracion from './pages/Configuracion';

function App() {
  const [dark, setDark] = useState(false);
  return (
    <DarkContext.Provider value={{ dark, setDark }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='' element={<Index />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/configuracion' element={<Configuracion />} />
            </Route>
            <Route path='/admin' element={<LayoutAdmin />}>
              <Route path='' element={<IndexAdmin />} />
              <Route path='usuarios' element={<Usuarios />} />
              {/* <Route path='usuarios/:nombreusuario' element={<UsuarioGenerico />} />  */}
            </Route>
          </Routes>
        </BrowserRouter>
    </DarkContext.Provider>
  );
}

export default App;
