import { useState } from 'react';
import './index.scss';

import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function CadastrarF() {
    const [usuario, setUsuario] = useState('');
    const [programa, setPrograma] = useState('');
    const [avaliacao, setAvaliacao] = useState('');

    async function salvar() {

        const paramCorpo = {
            "usuario": usuario,
            "canalPrograma": programa,
            "avaliacao": avaliacao
        }

        const url = 'http://localhost:7000/programaFavorito';
        let resp = await axios.post(url, paramCorpo);

        alert('Programa Favorito adicionado ao Id: ' + resp.data.idProgramaFavorito);

    }

    return (
        <div className='pagina-cadastrar'>

            <div className='top'>
                <a className='icon' href="/favoritos"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>CADASTRAR FAVORITOS</h1>
            </div>

            <div className='form'>
                <div>
                    <label>Usúario Id:</label>
                    <input type='text' placeholder='2' value={usuario} onChange={e => setUsuario(e.target.value)} />
                </div>
                <div>
                    <label>Programa Id:</label>
                    <input type='text' placeholder='2' value={programa} onChange={e => setPrograma(e.target.value)} />
                </div>
                <div>
                    <label>Avaliação:</label>
                    <input type='text' placeholder='7.0' value={avaliacao} onChange={e => setAvaliacao(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}