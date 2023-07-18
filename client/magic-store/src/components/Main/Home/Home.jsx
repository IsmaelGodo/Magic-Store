import React, { useEffect, useState } from "react";

const Home = () => {const [imageIndex, setImageIndex] = useState(0);
  const images = [
    './../src/assets/1.jpg',
    './../src/assets/2.jpg',
    './../src/assets/3.jpg',
    './../src/assets/4.jpg',
    './../src/assets/5.jpg',
    './../src/assets/6.jpg',
    './../src/assets/7.jpg',
    './../src/assets/8.jpg',
    './../src/assets/9.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => {
      clearInterval(timer);
    };
  }, [images]);

  return (
    <div className="carousel-container">
    <img
      src={images[imageIndex]}
      alt="Imagen"
      className="carousel-image"
    /><div className="intro">
    <h1>Magic-Store</h1>
    <img className="gif2" src="./../src/assets/intro.gif"/>
    </div>
    <img
      src={images[(imageIndex + 1) % images.length]}
      alt="Imagen"
      className="carousel-image"
    />
  </div>
  );
};

 
export default Home;
