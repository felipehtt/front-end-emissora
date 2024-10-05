import { useState } from 'react';
import './index.scss';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios'

export default function ConsultarU() {

    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [exibir, setExibir] = useState(false);

    async function buscar() {

        const url = 'http://localhost:7000/usuario';
        let resp = await axios.get(url);
        setListaUsuarios(resp.data);

        setExibir(!exibir);


    }

    return (
        <div className='pagina-consultar'>

            <div className='top'>
                <a className='icon' href="/usuarios"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>CONSULTAR</h1>
            </div>

            <button onClick={buscar}>{exibir == true ? 'Ocultar' : 'Exibir'}</button>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome do Usuário</th>
                    </tr>
                </thead>

                {exibir == true &&
                    
                    <tbody>
    
                        {listaUsuarios.map(item =>
                            <tr>
                                <td>{item.idUsuario}</td>
                                <td>{item.nome}</td>
                                <td><Link to={`/alterar/${item.idUsuario}`}><FontAwesomeIcon icon={faPenToSquare} /></Link></td>
                            </tr>
                        )}
                    </tbody>
    
                }


            </table>


        </div>

    );
}


