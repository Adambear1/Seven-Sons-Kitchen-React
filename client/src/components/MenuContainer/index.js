import React from "react";
import MenuCards from "../MenuCards";
// itemPhotos
import ribs from "./images/ribs.jpeg";
import chicken from "./images/chicken.jpg";
import crawfish from "./images/crawfish.jpg";
import pork from "./images/pork.jpg";
import turkey from "./images/turkey.jpg";
import porkLinks from "./images/porkLinks.jpg";
import coleslaw from "./images/coleslaw.jpg";
import corn from "./images/corn.jpg";
import applePie from "./images/applePie.jpg";

function MenuContainer() {
  let item = [
    {
      index: 1,
      name: "Ribs",
      image: ribs,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere delectus unde quidem incidunt veritatis optio temporibus eos consequuntur debitis.",
      price: "8.75",
    },
    {
      index: 2,
      name: "Chicken",
      image: chicken,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere delectus unde quidem incidunt veritatis optio temporibus eos consequuntur debitis.",
      price: "8.75",
    },
    {
      index: 3,
      name: "Crawfish",
      image: crawfish,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere delectus unde quidem incidunt veritatis optio temporibus eos consequuntur debitis.",
      price: "8.75",
    },
    {
      index: 4,
      name: "Pork",
      image: pork,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere delectus unde quidem incidunt veritatis optio temporibus eos consequuntur debitis.",
      price: "8.75",
    },
    {
      index: 5,
      name: "Turkey",
      image: turkey,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere delectus unde quidem incidunt veritatis optio temporibus eos consequuntur debitis.",
      price: "8.75",
    },
    {
      index: 6,
      name: "Pork Links",
      image: porkLinks,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere delectus unde quidem incidunt veritatis optio temporibus eos consequuntur debitis.",
      price: "8.75",
    },
    {
      index: 7,
      name: "Apple Pie",
      image: applePie,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere delectus unde quidem incidunt veritatis optio temporibus eos consequuntur debitis.",
      price: "8.75",
    },
    {
      index: 8,
      name: "Corn",
      image: corn,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere delectus unde quidem incidunt veritatis optio temporibus eos consequuntur debitis.",
      price: "8.75",
    },
    {
      index: 9,
      name: "Coleslaw",
      image: coleslaw,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere delectus unde quidem incidunt veritatis optio temporibus eos consequuntur debitis.",
      price: "8.75",
    },
  ];
  return (
    <>
      <div id="menu">
        <h2>Menu</h2>
        <div class="row top-row">
          {item.map((item) => {
            return (
              item.index < 4 && (
                <MenuCards
                  key={item.name}
                  index={item.index}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                />
              )
            );
          })}
        </div>
        <div class="row">
          {item.map((item) => {
            return (
              item.index >= 4 &&
              item.index < 7 && (
                <MenuCards
                  key={item.name}
                  index={item.index}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                />
              )
            );
          })}
        </div>
        <div class="row bottom-row">
          {item.map((item) => {
            return (
              item.index >= 7 &&
              item.index < 10 && (
                <MenuCards
                  key={item.name}
                  index={item.index}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                />
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MenuContainer;
