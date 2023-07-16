import React, {useState, useEffect} from "react";

const Searcher = ({search, handleChangeSearch, handleSubmitSearch, setNameCard, order, changeOrder, handleChangeColor, selectedColor }) => {

  return (
  <article className="search-container">
    <form onSubmit={handleSubmitSearch}>
      <input type="text" placeholder="Busca" onChange={handleChangeSearch} value={search} ></input>
      <button type="submit" className="search">Buscar</button>
    </form>
    
    
    
    <div>
    <button onClick={changeOrder}>{order}</button>
      <select  onChange={handleChangeColor}>
        <option value="">Seleccion Color</option>
        <option value="Rojo">Red</option>
        <option value="black">Black</option>
        <option value="Verde">Green</option>
        <option value="Azul">Blue</option>
        <option value="Blanco">White</option>
      </select>
      
    </div>
  </article>
  )
};

export default Searcher;
