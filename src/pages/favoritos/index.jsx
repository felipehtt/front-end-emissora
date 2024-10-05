import './index.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Favoritos() {

    return (

        <div className='pagina-home'>

            <div>

                <div className='top'>
                    <a className='icon' href="/"><FontAwesomeIcon icon={faArrowLeft} size='2x' color='#000' /></a>

                    <h1>Programas Favoritos</h1>
                    
                </div>

                <h2>Programas Favoritos dos Canais</h2>

                <ul>
                    <li><Link to='/favoritos/consultar'>Consultar Programas Favoritos</Link></li>
                    <li><Link to='/favoritos/cadastrar'>Cadastrar Programas Favoritos</Link></li>
                </ul>

            </div>

        </div>

    );

}