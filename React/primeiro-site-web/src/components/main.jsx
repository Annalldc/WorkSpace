import React from "react";
import imagem from '../img/HP.jpg'

let estilo = {fontSizer: '2rem', color: 'purple', backgroundColor: 'orange'}

const principalPrimeiro = () => {
    return(
        <>
            <p style={estilo}>Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end. Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.</p>

            <ul>
                <li>Harry Potter</li>
                <li>Raya e o último dragão</li>
                <li>Jogos Vorazes</li>
                <li>Encanto</li>
                <li>Vingadores a era de ultron</li>
            </ul>

            <img src={img} />
        
        </>
    );
};

export default principalPrimeiro;