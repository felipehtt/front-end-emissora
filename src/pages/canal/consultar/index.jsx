import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios'

export default function ConsultarC() {

    const [listaCanais, setListaCanais] = useState([]);
    const [exibir, setExibir] = useState(false);

    async function buscar() {

        const url = 'http://localhost:7000/canal';
        let resp = await axios.get(url);
        setListaCanais(resp.data);

        setExibir(!exibir);


    }

    return (
        <div className='pagina-consultar'>

            <div className='top'>
                <a className='icon' href="/canal"><FontAwesomeIcon icon={faArrowLeft} size='2x' /></a>

                <h1>CONSULTAR CANAL</h1>
            </div>

            <button onClick={buscar}>{exibir == true ? 'Ocultar' : 'Exibir'}</button>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>N° do Canal</th>
                        <th>Canal Aberto</th>
                    </tr>
                </thead>

                {exibir == true &&
                    
                    <tbody>
    
                        {listaCanais.map(item =>
                            <tr>
                                <td>{item.idCanal}</td>
                                <td>{item.nome}</td>
                                <td>{item.numero}</td>
                                <td>{item.aberto == true ? 'Sim' : 'Não'}</td>
                                <td><Link to={`/canal/alterar/${item.idCanal}`}><FontAwesomeIcon icon={faPenToSquare} /></Link></td>
                            </tr>
                        )}
                    </tbody>
    
                }


            </table>


        </div>

    );
}


