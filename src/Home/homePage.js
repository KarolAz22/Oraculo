import React from 'react';
import './styleHome.css'

import Navbar from '../Componentes/Navbar/navbar';
import backgroundImagePrincipal from '../Componentes/Navbar/imgPrincipal.svg'; // Importe a imagem desejada

const Home = () => {
    return(
        <div>
            <Navbar backgroundImage={backgroundImagePrincipal} />
            <div class="conteiner-palavra">
                <div className="estatico">Saúde</div>
                    <ul className="dinamico">
                        <li><span>Sexual</span></li>
                        <li><span>Feminina</span></li>
                    </ul>
                </div>
                <div>
                    <span className='frase'>Cuide-se, você é a pessoa mais <br /> importante da sua vida </span>
                </div>
           </div>
    )
}

export default Home;