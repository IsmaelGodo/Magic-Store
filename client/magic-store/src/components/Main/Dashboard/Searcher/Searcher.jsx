import React, {useState, useEffect} from "react";

const Searcher = ({setNameCard}) => {

const [search, setSearch]= useState('')


  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  }

const handleSubmitSearch = (e) => {
  e.preventDefault();
  if (search.trim() !== "") { 
    setNameCard(search);
    setSearch('');
    
  }
};



  return (
  <article className="search-container">
    <form onSubmit={handleSubmitSearch}>
      <input type="text" placeholder="Busca" onChange={handleChangeSearch} value={search} ></input>
      <button type="submit" className="search">Buscar</button>
    </form>
  </article>
  )
};

export default Searcher;
