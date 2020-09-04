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
          <p class="card-footer">{props.price}</p>
          <button
            class="AddToOrder"
            id={props.name}
            value={props.price}
            type="submit"
          >
            Add to Order!
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCards;
