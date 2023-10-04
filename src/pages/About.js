import "./About.css";
import menu02 from "../asset/menu01.jpeg";
import menu03 from "../asset/menu02.jpeg";
import menu04 from "../asset/menu03.jpeg";
import menu05 from "../asset/menu04.jpeg";
import menu06 from "../asset/menu05.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutReview from "./AboutReview";
function About() {
  const menus = [
    {
      image: menu02,
      name: "Chicken, cons on the Internet tend to yorem psum generators on the Internet tomatoes, Soup",
      message:
        "Excellent service! I highly recommend BuagoPula. default model text, and a search for 'lorem ipsum' wlike model text, and a search .",
    },
    {
      image: menu03,
      name: "Chicken, cons on the Internet tend to yorem psum generators on the Internet tomatoes, Soup",
      message:
        "Excellent service! I highly recommend BuagoPula. default model text, and a search for 'lorem ipsum' wlike model text, and a search .",
    },
    {
      image: menu04,
      name: "Chicken, cons on the Internet tend to yorem psum generators on the Internet tomatoes, Soup",
      message:
        "Excellent service! I highly recommend BuagoPula. default model text, and a search for 'lorem ipsum' wlike model text, and a search .",
    },
    {
      image: menu05,
      name: "Chicken, cons on the Internet tend to yorem psum generators on the Internet tomatoes, Soup",
      message:
        "Excellent service! I highly recommend BuagoPula. default model text, and a search for 'lorem ipsum' wlike model text, and a search .",
    },
    {
      image: menu06,
      name: "Chicken, cons on the Internet tend to yorem psum generators on the Internet tomatoes, Soup",
      message:
        "Excellent service! I highly recommend BuagoPula. default model text, and a search for 'lorem ipsum' wlike model text, and a search .",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
    <>
      <div className="container">
        <div class="row">
          <div class="col-lg-6 md-4" id="aboutText">
            <h4 id="aboutTitle">
              About Us<span></span>
            </h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition
            </p>
            <p>
              Lorem Ipsum generators on the Internet tend to repeat predefined
              chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum which looks reasonable. The generated Lorem Ipsum is
              therefore always free from repetition
            </p>
          </div>
          <div class="col-lg-6 md-4">
            <img src={menu06} id="aboutImg" />
          </div>
        </div>
        <div className="container" id="latestDishBox">
          <h4>check out our latest dishies</h4>
          <Slider {...settings}>
            {menus.map((menu, index) => (
              <div key={index} id="showImage">
                <img src={menu.image} alt={`Slide ${index}`} />
                <p>{menu.name}</p>
                <small>{menu.message}</small>
                <div id="showImageBtn">
                  <button>
                    Order now <i class="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="container" id="theAccordion">
          <h4 id="faq">
            Frequent Asked Questions <span></span>
          </h4>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How do i become a theGREATtable member ?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled i
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How much is needed ?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What are the requirements
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Methods of deposits
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Do you have affiliate progam ?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <AboutReview />
      </div>
    </>
  );
}

export default About;
