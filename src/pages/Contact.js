


import "./Contact.css";
function Contact() {
    return (
        <>
            <div className="container" id="contact">
                <h4>Get Intouch</h4>
                <form id="contactForm">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input class="form-control form-control-lg" type="email" placeholder="" aria-label=".form-control-lg example" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <input class="form-control form-control-lg" type="number" placeholder="" aria-label=".form-control-lg example" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div id="contactBtn">
                        <button>Send message</button>
                    </div>

                </form>
            </div>
            <div className="container-fluid" id="footer">
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            Column
                        </div>
                        <div class="col">
                            Column
                        </div>
                        <div class="col">
                            Column
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
