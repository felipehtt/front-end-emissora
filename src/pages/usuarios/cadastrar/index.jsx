import { useState } from 'react';
import './index.scss';

import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function CadastrarU() {

    const [nome, setNome] = useState('');

    async function salvar() {

        const paramCorpo = {
            "nome": nome
        }

        const url = 'http://localhost:7000/usuario';
        let resp = await axios.post(url, paramCorpo);

        alert('Pessoa adicionada na lista. Id: ' + resp.data.idUsuario);

    }

    return (
        <div className='pagina-cadastrar'>

            <div className='top'>
                <a className='icon' href="/usuarios"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>CADASTRAR USUÁRIO</h1>
            </div>

            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' placeholder='Felipe Soares' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}