import './index.scss';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function AlterarC() {

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [aberto, setAberto] = useState(false);

    const { id } = useParams();

    async function alterar() {

        const paramCorpo = {
            "nome": nome,
            "numero": numero,
            "aberto": aberto
        }

        const url = `http://localhost:7000/canal/${id}`;
        let resp = await axios.put(url, paramCorpo);

        alert(`Canal Alterado.`);

    }

    async function buscar() {

        const url = `http://localhost:7000/canal/${id}`;
        let resp = await axios.get(url);
        
        setNome(resp.data.nome);
        setNumero(resp.data.numero);
        setAberto(resp.data.aberto);

    }

    useEffect(() => {

        buscar();

    }, [])

    return (

        <div className='pagina-alterar'>

            <div className='top'>
                <a className='icon' href="/canal"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>ALTERAR CANAL</h1>
            </div>

            <p>id do Canal: {id}</p>

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
                    <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)} />
                </div>

            </div>
            <Link to='/canal/consultar'><button onClick={alterar}> ALTERAR </button></Link>

        </div>

    );

}