import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import img1 from '../AllImage/1.webp';
import img2 from '../AllImage/2.webp';
import img3 from '../AllImage/3.jpg';
import img4 from '../AllImage/4.jpg';
import img5 from '../AllImage/5.webp';

const Slider = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <Carousel interval={3000} pause={false} controls={true} indicators={true}>
      {images.map((src, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={src}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
