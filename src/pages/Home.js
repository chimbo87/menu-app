import "./Home.css";
import home01 from "../asset/home 01.jpeg";
import home02 from "../asset/home 02.jpeg";
import home03 from "../asset/home 03.webp"


function Home() {
    return (
        <div className="container-fluid" id="homePage">
            <div id="carouselExampleDark" class="carousel carousel-dark slide"  data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={home01} class="d-block w-100" alt="..." id="homeImg" />
                        <div class="carousel-caption d-none d-md-block" id="homeTxt">
                            <h5>Restaurant and Bar</h5>
                            <p>There are many variations of passages of Lorem Ipsum available,
                                 but the majority have suffered alteration in some form, by injected humour,
                                 or randomised words which don't look even slightly believable. </p>
                                 <button>Our Menu</button>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={home02} class="d-block w-100" alt="..." id="homeImg" />
                        <div class="carousel-caption d-none d-md-block"id="homeTxt">
                            <h5>Dinning and pub</h5>
                            <p>There are many variations of passages of Lorem Ipsum available,
                                 but the majority have suffered alteration in some form, by injected humour,
                                 or randomised words which don't look even slightly believable. </p>
                                 <button>Book a table</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={home03} class="d-block w-100" alt="..." id="homeImg" />
                        <div class="carousel-caption d-none d-md-block"id="homeTxt">
                            <h5>Third slide label</h5>
                            <p>There are many variations of passages of Lorem Ipsum available,
                                 but the majority have suffered alteration in some form, by injected humour,
                                 or randomised words which don't look even slightly believable. </p>
                                 <button>Book a table</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
}

export default Home;
