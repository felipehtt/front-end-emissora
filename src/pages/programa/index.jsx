import './index.scss';
import { Link } from 'react-router-dom';

export default function Programa() {

    return (

        <div className='pagina-home'>

            <div>

                <h1>- Programas</h1>

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