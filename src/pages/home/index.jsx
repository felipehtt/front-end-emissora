import './index.scss';
import { Link } from 'react-router-dom';

export default function Home() {

    return (

        <div className='pagina-home'>

            <div>

                <h1>- Cabine de Comando</h1>

                <h2>Controle das Emissoras</h2>

                <img src="" alt="" />

                <ul>
                    <li><Link to='/canal'>Entrar em Canais</Link></li>
                    <li><Link to='/programa'>Entrar em Programas</Link></li>
                    <li><Link to='/favorito'>Entrar em Programas Favoritos</Link></li>
                </ul>

            </div>

        </div>

    );

}