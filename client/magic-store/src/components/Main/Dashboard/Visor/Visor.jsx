import React from "react";

const Visor = ({visorImg, visorDesc, visorColor}) => {
  return <section className="visor-container">
    {/* <img src={`../src/assets/${visorColor}.png`}/> */}
    <img src={visorImg} alt="Imagen" className="visor-logo" />
  <p>{visorDesc}</p>
  </section>;
};

export default Visor;
