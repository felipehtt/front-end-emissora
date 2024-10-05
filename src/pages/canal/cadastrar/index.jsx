import { useState } from 'react';
import './index.scss';

import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function CadastrarC() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [aberto, setAberto] = useState(false);


    async function salvar() {

        const paramCorpo = {
            "nome": nome,
            "numero": numero,
            "aberto": aberto
        }

        const url = 'http://localhost:7000/canal';
        let resp = await axios.post(url, paramCorpo);

        alert('Canal Adicionado. Id: ' + resp.data.idCanal);

    }

    return (
        <div className='pagina-cadastrar'>

            <div className='top'>
                <a className='icon' href="/canal"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>CADASTRAR CANAL</h1>
            </div>

            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' placeholder='Rede Globo' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>N° Canal:</label>
                    <input type='text' placeholder='5' value={numero} onChange={e => setNumero(e.target.value)} />
                </div>
                <div>
                    <label>Canal Aberto:</label>
                    <input type='checkbox'  checked={aberto} onChange={e => setAberto(e.target.checked)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}