import React from "react";

const Card = ({ nombre,color,descripcion, handleVisor, imagen }) => {
  return <div 
  onMouseEnter={handleVisor}
  img-info={imagen}
  desc-info={descripcion}
  className={`${color}-card`}>
    
      {nombre}{color}
    
  </div>;
};

export default Card;
