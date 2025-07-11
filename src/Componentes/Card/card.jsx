import React from 'react';
import './styleCard.css';

const Card = ({ imagem, nome, especialidade, endereco, cidadeEstado, whatsappLink }) => {
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

        {whatsappLink && (
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png"
              alt="WhatsApp"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
