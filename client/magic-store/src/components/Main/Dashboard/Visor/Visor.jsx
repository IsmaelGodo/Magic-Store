import React from "react";

const Visor = ({visorImg, visorDesc}) => {
  return <div><img src={visorImg} alt="Imagen" />
  <p>{visorDesc}</p>
  </div>;
};

export default Visor;
