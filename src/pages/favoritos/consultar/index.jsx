import { useState } from 'react';
import './index.scss';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios'

export default function ConsultarF() {

    const [listaFavoritos, setListaFavoritos] = useState([]);
    const [exibir, setExibir] = useState(false);


    async function buscar() {

        const url = `http://localhost:7000/programaFavorito`;
        let resp = await axios.get(url);
        setListaFavoritos(resp.data);

        setExibir(!exibir);

    }

    return (
        <div className='pagina-consultar'>

            <div className='top'>
                <a className='icon' href="/favoritos"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>CONSULTAR</h1>
            </div>

            <button onClick={buscar}>{exibir == true ? 'Ocultar' : 'Exibir'}</button>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Usuário</th>
                        <th>Programa</th>
                        <th>Avaliação</th>
                    </tr>
                </thead>

                {exibir == true &&
                    
                    <tbody>
    
                        {listaFavoritos.map(item =>
                            <tr>
                                <td>{item.idProgramaFavorito}</td>
                                <td>{item.usuario}</td>
                                <td>{item.programa}</td>
                                <td>{`${item.avaliacao}.0`}</td>
                                <td><Link to={`/favoritos/alterar/${item.idProgramaFavorito}`}><FontAwesomeIcon icon={faPenToSquare} /></Link></td>
                            </tr>
                        )}
                    </tbody>
    
                }


            </table>


        </div>

    );
}


