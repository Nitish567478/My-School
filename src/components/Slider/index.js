import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../AllImage/1.webp';
import img2 from '../AllImage/2.webp';
import img3 from '../AllImage/3.jpg';
import img4 from '../AllImage/4.jpg';
import img5 from '../AllImage/5.webp';

const BootstrapSlider = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={src} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Optional indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BootstrapSlider;
