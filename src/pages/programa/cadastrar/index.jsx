import { useState } from 'react';
import './index.scss';

import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function CadastrarP() {
    const [idCanal, setIdCanal] = useState('');
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [hora, setHora] = useState('');

    async function salvar() {

        const paramCorpo = {
            "idCanal": idCanal,
            "nome": nome,
            "genero": genero,
            "hora": hora
        }

        const url = 'http://localhost:7000/programa';
        let resp = await axios.post(url, paramCorpo);

        alert('Programa Adicionado. Id: ' + resp.data.idCanalPrograma);

    }

    return (
        <div className='pagina-cadastrar'>

            <div className='top'>
                <a className='icon' href="/programa"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>CADASTRAR PROGRAMA</h1>
            </div>

            <div className='form'>
                <div>
                    <label>Id do Canal:</label>
                    <input type='text' placeholder='1' value={idCanal} onChange={e => setIdCanal(e.target.value)} />
                </div>
                <div>
                    <label>Programa:</label>
                    <input type='text' placeholder='Esporte Espetacular' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Genêro:</label>
                    <input type='text' placeholder='Esportes' value={genero} onChange={e => setGenero(e.target.value)} />
                </div>
                <div>
                    <label>Horário:</label>
                    <input type='text' placeholder='13:30' value={hora} onChange={e => setHora(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}