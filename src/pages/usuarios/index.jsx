import './index.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function Usuarios() {

    return (

        <div className='pagina-home'>

            <div>

            <div className='top'>
                <a className='icon' href="/"><FontAwesomeIcon icon={faArrowLeft} size='2x' color='#000' /></a>

                <h1>USUARIOS</h1>
            </div>

                <h2>Usuarios que Assistem a Tv</h2>

                <img src="" alt="" />

                <ul>
                    <li><Link to='/usuarios/consultar'>Consultar Usuarios</Link></li>
                    <li><Link to='/usuarios/cadastrar'>Cadastrar Usuarios</Link></li>
                </ul>

            </div>

        </div>

    );

}