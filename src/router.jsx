import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Canal from './pages/canal';
import Programa from './pages/programa';
import Favoritos from './pages/favoritos';
import Usuarios from './pages/usuarios'
import CadastrarC from './pages/canal/cadastrar';
import ConsultarC from './pages/canal/consultar';
import AlterarC from './pages/canal/alterar';
import CadastrarP from './pages/programa/cadastrar';
import ConsultarP from './pages/programa/consultar';
import CadastrarF from './pages/favoritos/cadastrar';
import ConsultarF from './pages/favoritos/consultar';
import AlterarF from './pages/favoritos/alterar';
import CadastrarU from './pages/usuarios/cadastrar';
import ConsultarU from './pages/usuarios/consultar';


export default function Navegacao() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/canal' element={<Canal />} />
        <Route path='/programa' element={<Programa />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/canal/consultar' element={<ConsultarC />} />
        <Route path='/canal/cadastrar' element={<CadastrarC />} />
        <Route path='/canal/alterar/:id' element={<AlterarC />} />
        <Route path='/programa/consultar' element={<ConsultarP />} />
        <Route path='/programa/cadastrar' element={<CadastrarP />} />
        <Route path='/favoritos/consultar' element={<ConsultarF />} />
        <Route path='/favoritos/cadastrar' element={<CadastrarF />} />
        <Route path='/favoritos/alterar/:id' element={<AlterarF />} />
        <Route path='/usuarios/consultar' element={<ConsultarU />} />
        <Route path='/usuarios/cadastrar' element={<CadastrarU />} />
      </Routes>
    </BrowserRouter>

  )

}