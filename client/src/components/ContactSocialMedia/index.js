import React from "react";
import "./styles.css";
function ContactSocialMedia() {
  return (
    <div class="row">
      <div class="col-sm-4">
        <a
          href="https://twitter.com/minimalmonkey"
          class="icon-button instagram"
        >
          <i class="fab fa-instagram"></i>
          <span></span>
          <p class="icon-name">SevenSonsKitchen</p>
        </a>
        <a href="https://facebook.com" class="icon-button facebook">
          <i class="fab fa-facebook"></i>
          <span></span>
          <p class="icon-name">SevenSonsKitchen</p>
        </a>
        <a href="https://plus.google.com" class="icon-button google-plus">
          <i class="fab fa-google"></i>
          <span></span>
          <p class="icon-name">SevenSonsKitchen@gmail.com</p>
        </a>
      </div>
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        {" "}
        <a
          href="https://twitter.com/minimalmonkey"
          class="icon-button instagram"
        >
          <i class="fab fa-instagram"></i>
          <span></span>
          <p class="icon-name">SevenSonsKitchen</p>
        </a>
      </div>
    </div>
  );
}

export default ContactSocialMedia;
