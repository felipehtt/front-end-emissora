import './index.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Programa() {

    return (

        <div className='pagina-home'>

            <div>

                <div className='top'>
                    <a className='icon' href="/"><FontAwesomeIcon icon={faArrowLeft} size='2x' color='#000' /></a>

                    <h1>Programa</h1>
                </div>

                <h2>Programas dos Canais</h2>

                <img src="" alt="" />

                <ul>
                    <li><Link to='/consultar'>Consultar Programas</Link></li>
                    <li><Link to='/cadastrar'>Cadastrar Programas</Link></li>
                </ul>

            </div>

        </div>

    );

}