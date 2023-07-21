import menulogo from "../asset/menulogo.jpeg";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="container" id="contact">
        <div class="row" id="contactWrapper">
          
          <div class="col-lg-8 md-4">
            <h4 id="footerTitle">
              Get Intouch <span></span>
            </h4>
            <form id="contactForm">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  class="form-control form-control-lg"
                  type="email"
                  placeholder=""
                  aria-label=".form-control-lg example"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number
                </label>
                <input
                  class="form-control form-control-lg"
                  type="number"
                  placeholder=""
                  aria-label=".form-control-lg example"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div id="contactBtn">
                <button>Send message</button>
              </div>
            </form>
          </div>
          <div class="col-lg-4 md-4" id="contactBoxId">
            <div id="contactIcon">
              <div>
                <i class="fas fa-map-marker"></i>
              </div>
              <div>
                <p>
                  20 Muti Street Johannesburg<br></br>
                  Gauteng Province<br></br> South Africa
                </p>
              </div>
            </div>
            <div id="contactIcon">
              <div>
              <i class='fas fa-phone-alt'></i>
              </div>
              <div>
                <p>
                  {" "}
                  +27123 456 7890<br></br>
                  +27123 456 7890<br></br>
                  +27123 456 7890
                </p>
              </div>
            </div>

            <div id="contactIcon">
              <div>
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <p>
                  example@thegreattable.com<br></br>
                  support@thegreattable.com<br></br>
                  abcdefe@thegreatable.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* the footer section start here*/}

      <div className="container-fluid" id="footer">
        <div class="container text-center" id="footerBox">
          <div class="row">
            <div class="col-lg-4 md-4" id="footerWrap">
              <h4>About</h4>
              <p>
                Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary, making this the first true generator on the
                Internet. It uses a dictionary of over 200 Latin words, combined
                with a handful of model sentence structures,{" "}
              </p>
              <div id="footerImg">
                <img src={menulogo} id="aboutImg" />
                <h5>
                  the<span>GREAT</span>table
                </h5>
              </div>
            </div>
            <div class="col-lg-4 md-4" id="footerWrap">
              <h4>Opening Hours</h4>
              <p>Monday to Thursday 08:00hrs - 22:00hrs</p>
              <p>Friday to Sunday 08:00hrs - 01:00hrs</p>
              <p>
                Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary, making this the first true generator on the
                Internet. It uses a dictionary
              </p>
            </div>
            <div class="col-lg-4 md-4" id="footerWrap2">
              <h4>Quick links</h4>
              <p>Our menu</p>
              <p>Promotions</p>
              <p>Booking</p>
              <p>Payments</p>
              <p>Services</p>
              <div id="footerSocialLinks">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
        <p id="footRights"><span>&copy;</span> theGREATtable 2023</p>
      </div>
    </>
  );
}

export default Contact;
