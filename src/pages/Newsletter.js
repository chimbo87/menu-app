import "./Newsletter.css";
import google from "../asset/google.png";
import apple01 from "../asset/apple01.png";
function Newsletter() {
  return (
    <div className="container" id="newSection">
      <div class="row" id="iconWrap">
        <div class="col-lg-3 md-3" id="newsIcons">
          <img src={google} id="newIcon" />
        </div>
        <div class="col-lg-3 md-3" id="newsIcons">
          <img src={apple01} id="newIcon" />
        </div>
      </div>
      <div className="newsletterBox">
        <h4>Please sign-up for Newsletter</h4>
        <div class="input-group mb-3" id="theSubsribeInput">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
