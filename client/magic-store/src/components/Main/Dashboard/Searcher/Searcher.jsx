import React, {useState, useEffect} from "react";

const Searcher = ({search,SwichMode,typeSearch, handleChangeSearch, handleSubmitSearch, setNameCard, order, changeOrder, handleChangeColor, selectedColor }) => {

  return (
  <article className="search-container">
    <form onSubmit={handleSubmitSearch}>
       <button  className="search-button" type="submit" >Buscar</button>
      <input type="text" placeholder="Buscando" onChange={handleChangeSearch} value={search} ></input>
    </form>
    <button className="swich" onClick={SwichMode}>{typeSearch}</button>
    
    <section className="search-tools">
    <button onClick={changeOrder}>{order}</button>
      <select  onChange={handleChangeColor}>
        <option value="">Color</option>
        <option value="Rojo">Red</option>
        <option value="Negro">Black</option>
        <option value="Verde">Green</option>
        <option value="Azul">Blue</option>
        <option value="Blanco">White</option>
      </select>
      

    </section>
  </article>
  )
};

export default Searcher;
