import React, { useEffect, useState } from "react";
import axios from "axios";
import Searcher from "./Searcher/Searcher";
import Card from "./Card/Card";
import Visor from "./Visor/Visor";

const Dashboard = () => {
  const [nameCard, setNameCard] = useState("");
  const [order, setOrder] = useState("DES");
  const [selectedColor, setSelectedColor] = useState("");
  const [search, setSearch] = useState("");
  const [dataCard, setDataCard] = useState([]);
  const [visorImg, setVisorImg] = useState("");
  const [visorDesc, setVisorDesc] = useState("");
  const [urlFetch, setUrlFetch] = useState(`http://localhost:4000/api/card?`);
  const [searchType, setSearchType] = useState('nombre=');

  useEffect(() => {

    const reversedData = [...dataCard];
    reversedData.reverse();
    setDataCard(reversedData);

  }, [order]);

  useEffect(() => {

    setSearchType('color=');
    setNameCard(selectedColor);


  }, [selectedColor]);

  const handleVisor = (e) => {
    const imgVisor = e.target.getAttribute('img-info');
    const descVisor = e.target.getAttribute('desc-info');
    setVisorImg(imgVisor);
    setVisorDesc(descVisor)
  }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    
      setSearchType('nombre=');
      setNameCard(search);
      setSearch("");
    
  };

  const handleChangeColor = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue !== "") {
      setSelectedColor(selectedValue);
    }
  };

  const changeOrder = () => {
    setOrder(order === "DES" ? "ASC" : "DES");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${urlFetch}${searchType}${nameCard}`
        );
        const data = response.data;
        const newDataCard = data.map((card, index) => ({
          key: index,
          nombre: card.nombre,
          descripcion: card.descripcion,
          imagen: card.imagen,
          color: card.color,
          ilustrador: card.id_ilu,
        }));
        setDataCard(newDataCard);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [nameCard]);

  useEffect(() => {
    console.log(dataCard);
  }, [dataCard]);

  return (

    <section className="dashboard">
      <article className="search">
        {selectedColor}{searchType}{nameCard}
        <Searcher
          handleChangeColor={handleChangeColor}
          order={order}
          selectedColor={selectedColor}
          changeOrder={changeOrder}
          setNameCard={setNameCard}
          handleChangeSearch={handleChangeSearch}
          handleSubmitSearch={handleSubmitSearch}
          search={search}
        /></article>
      <article className="cards-container">
        {dataCard.map((card2, index) => (
          <Card
            handleVisor={handleVisor}
            key={index}
            nombre={card2.nombre}
            color={card2.color}
            descripcion={card2.descripcion}
            imagen={card2.imagen}
          />
        ))}
      </article>
      <article className="visor">
        <Visor
          visorImg={visorImg}
          visorDesc={visorDesc}
        />
      </article>
    </section>
  );
};

export default Dashboard;
