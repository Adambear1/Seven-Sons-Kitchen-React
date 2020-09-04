import React from "react";
import image from "./images/rib.jpg";
import image1 from "./images/ribs1.jpg";
import image2 from "./images/ribs2.jpeg";

function HeaderJumbotron() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={image} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={image1} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={image2} alt="Third slide" />
        </div>
      </div>
    </div>
  );
}

export default HeaderJumbotron;
