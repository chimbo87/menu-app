import "./Newsletter.css";
import google from "../asset/google.png";
 import apple01 from "../asset/apple01.png"
function Newsletter() {
    return (
        <div className="container" id="newSection">

            <div class="row"id="iconWrap">
                <div class="col" id="newsBox">
                    <img src={google} id="newIcon" />
                </div>
                <div class="col" id="newsBox">
                    <img src={apple01} id="newIcon" />
                </div>
            </div>
            <div className="newsletterBox">
                <h4>Please sign-up for Newsletter</h4>
                <div class="input-group mb-3">
                <input class="form-control form-control-lg" type="text" placeholder="Enter your email" aria-label=".form-control-lg example"/>
                    <span class="input-group-text" id="basic-addon2">Sign-Up</span>
                </div>
            </div>

        </div>
    );
}

export default Newsletter;
