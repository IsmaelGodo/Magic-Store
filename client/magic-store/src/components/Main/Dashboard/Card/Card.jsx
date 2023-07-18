import React from "react";

const Card = ({ nombre,color,descripcion, handleVisor, imagen }) => {
  return <div 
  onMouseEnter={handleVisor}
  img-info={imagen}
  desc-info={descripcion}
  color-info={color}
  className={`${color}-card`}>
    
      <img className="img-color" src={`../src/assets/${color}.png`}/><p>{nombre}</p>
      
    
  </div>;
};

export default Card;
