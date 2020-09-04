import React from "react";

function MenuCards(props) {
  return (
    <div class="col-sm-12 col-lg-4 my-1">
      <div class="card">
        <img class="card-image" src={props.image} alt="" />
        <div class="overlay">
          <h3>
            (#{props.index}){"  "} {props.name}
          </h3>
          <p class="item-detail">{props.description}</p>
          <p class="card-footer">${props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCards;
