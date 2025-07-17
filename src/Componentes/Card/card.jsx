import React from 'react';
import './styleCard.css';

const Card = ({ image, name, specialty, address, cityState, link, icon }) => {
  return (
    <div className="card">
      <img src={image} alt={`Imagem de ${name}`} className="card-image" />

      <div className="card-content">
        <div>
          <h2>{specialty} {name}</h2>
          <hr />
          <p>{address}</p>
          <p>{cityState}</p>
        </div>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="icon">
            <img src={icon} alt="Ícone de ação" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
