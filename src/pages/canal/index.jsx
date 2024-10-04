import './index.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function canal() {

    return (

        <div className='pagina-home'>

            <div>

            <div className='top'>
                <a className='icon' href="/"><FontAwesomeIcon icon={faArrowLeft} size='2x' color='#000' /></a>

                <h1>CANAL</h1>
            </div>

                <h2>Canais da Tv</h2>

                <img src="" alt="" />

                <ul>
                    <li><Link to='/canal/consultar'>Consultar Canais</Link></li>
                    <li><Link to='/canal/cadastrar'>Cadastrar Canais</Link></li>
                </ul>

            </div>

        </div>

    );

}