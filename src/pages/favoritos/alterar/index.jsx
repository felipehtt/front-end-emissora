import './index.scss';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function AlterarF() {

    const [usuario, setUsuario] = useState('');
    const [programa, setPrograma] = useState('');
    const [avaliacao, setAvaliacao] = useState('');

    const { id } = useParams();

    async function alterar() {

        const paramCorpo = {

            "usuario": usuario,
            "canalPrograma": programa,
            "avaliacao": avaliacao

        }

        const url = `http://localhost:7000/programaFavorito/${id}`;
        let resp = await axios.put(url, paramCorpo);

        alert(`Programa Favorito Alterado.`);


    }

    async function buscar() {

        const url = `http://localhost:7000/join/programaFavorito/${id}`;
        let resp = await axios.get(url);

        setUsuario(resp.data.usuario);
        setPrograma(resp.data.programa);
        setAvaliacao(resp.data.avaliacao);

    }

    useEffect(() => {

        buscar();

    }, [])

    return (

        <div className='pagina-alterar'>

            <div className='top'>
                <a className='icon' href="/favoritos"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>ALTERAR</h1>
            </div>

            <p>id Programa Favorito: {id}</p>

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

            <Link to='/favoritos/consultar'><button onClick={alterar}> ALTERAR </button></Link>

        </div>

    );

}