import React from "react";
import "./styles.css";
function ContactSocialMedia() {
  return (
    <div class="row">
      <div class="col-sm-4">
        <a
          href="https://instagram.com/sevensonskitchen"
          class="icon-button instagram"
        >
          <i class="fab fa-instagram"></i>
          <span></span>
          <p class="icon-name">SevenSonsKitchen</p>
        </a>
        <a
          href="https://facebook.com/sevensonskitchen"
          class="icon-button facebook"
        >
          <i class="fab fa-facebook"></i>
          <span></span>
          <p class="icon-name">SevenSonsKitchen</p>
        </a>
        <a
          href="mailto:sevensonskitchen@gmail.com"
          class="icon-button google-plus"
        >
          <i class="fab fa-google"></i>
          <span></span>
          <p class="icon-name">SevenSonsKitchen@gmail.com</p>
        </a>
      </div>
      <div class="col-sm-4"></div>
      <div class="col-sm-4 row-large">
        {" "}
        <a
          href="https://instagram.com/sevensonskitchen"
          class="icon-button phone"
        >
          <i class="fas fa-phone"></i>
          <span></span>
          <p class="icon-name-right">(555)-555-5555</p>
        </a>
        <a
          href="https://instagram.com/sevensonskitchen"
          class="icon-button location"
        >
          <i class="fas fa-search-location"></i>
          <span></span>
          <p class="icon-name-right">555 S Tyler St, Tacoma </p>
        </a>
      </div>
    </div>
  );
}

export default ContactSocialMedia;
