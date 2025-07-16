import React from 'react';
import './styleCard.css';

const Card = ({ imagem, nome, especialidade, endereco, cidadeEstado, link, icone }) => {
  return (
    <div className="card">
      <img src={imagem} alt={`Imagem de ${nome}`} className="card-image" />

      <div className="card-content">
        <div>
          <h2>{especialidade} {nome}</h2>
          <hr />
          <p>{endereco}</p>
          <p>{cidadeEstado}</p>
        </div>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="icon">
            <img src={icone} alt="Ícone de ação" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
