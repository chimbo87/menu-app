import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import review01 from "../asset/review01.jpg";
import review02 from "../asset/review02.jpeg";
import review03 from "../asset/review03.jpeg";
import review04 from "../asset/review04.jpeg";
import review05 from "../asset/review01.jpg";

function AboutReview() {
  const menus = [
    {
      image: review01,
      name: "John Doe",
      message:
        "Excellent service! I highly recommend BuagoPula. default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      image: review02,
      name: "Jane Smith",
      message:
        "The team at BuagoPula is very professional and friendly. default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      image: review03,
      name: "John Doe",
      message:
        "Excellent service! I highly recommend BuagoPula. default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      image: review04,
      name: "John Doe",
      message:
        "Excellent service! I highly recommend BuagoPula. default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      image: review01,
      name: "Alice Johnson",
      message:
        "I'm impressed with the quality of their work. default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="AboutReviewshowBox">
      <h4>Happy Customers</h4>
      <Slider {...settings}>
        {menus.map((menu, index) => (
          <div key={index} id="AboutReviewshow">
            <div id="AboutReviewshowImage">
              <img src={menu.image} alt={`Slide ${index}`} />
            </div>
            <div id="AboutReviewshowTexts">
              <p>{menu.name}</p>
              <small>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                {menu.message}
                <span><i class="bx bxs-quote-alt-right"></i></span>
              </small>
             
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AboutReview;
