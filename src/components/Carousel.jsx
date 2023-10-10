import React, { useState } from 'react';
import './Carousel.css';

const images = ['../affiches/Default.jpg', 
'../affiches/Default.jpg', 
'../affiches/Default.jpg', 
'../affiches/Default.jpg', 
'../affiches/Default.jpg', 
'../affiches/Default.jpg']; // Agrega las rutas de tus imágenes


function Carousel({arrFichas ,visibleSlides = 4}) {
    const [startIndex, setStartIndex] = useState(0);
  
    const prevSlide = () => {
      if (startIndex > 0) {
        setStartIndex(startIndex - 1);
      }
    };
  
    const nextSlide = () => {
      if (startIndex < images.length - visibleSlides) {
        setStartIndex(startIndex + 1);
      }
    };

    const slideStyle = {
        flexBasis: `${100 / visibleSlides}%`, // Ajustar el ancho de cada slide
      };
  
    return (
      <div className="carousel-container">

        <button onClick={prevSlide} id="prev">▲</button>

        <div className="carousel">
          {images.slice(startIndex, startIndex + visibleSlides).map((image, index) => (
            <div className="slide" key={index} style={slideStyle}>
              <img src={image} alt={`Película ${startIndex + index + 1}`} />
              <h3>Película {startIndex + index + 1}</h3>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} id="next">▲</button>

      </div>
    );
  }

export default Carousel;


