import React from "react";
import menu02 from "../asset/menu01.jpeg";
import "./Productdescription.css";

function Productdescription() {
  return (
   <div id="menuDishPage">
 <div class="row" id="dishDescription">
      <div class="col-lg-6 col-md-4" id="dishDescriptionBox">
        <img src={menu02}></img>
      </div>
      <div class="col-lg-6 col-md-4">
      <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishin
        </p>
      </div>
    </div>
   </div>
  );
}

export default Productdescription;
