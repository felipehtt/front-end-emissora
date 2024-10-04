import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Canal from './pages/canal';
import Programa from './pages/programa';
import Cadastrar from './pages/canal/cadastrar';
import Consultar from './pages/programasFavoritos/consultar';
import Alterar from './pages/canal/alterar';

export default function Navegacao() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/canal' element={<Canal />} />
        <Route path='/programa' element={<Programa />} />
        <Route path='/consultar' element={<Consultar />} />
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route path='/cadastrar/:id' element={<Cadastrar />} />
        <Route path='/alterar/:id' element={<Alterar />} />
      </Routes>
    </BrowserRouter>

  )

}