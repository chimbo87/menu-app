import "./Header.css";
import menulogo from "../asset/menulogo.jpeg";
function Header() {
    return (
        <>
            <div className="container">

                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#" id="logoBox"> <img src={menulogo} id="aboutImg" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">About-us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Service</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Contact</a>
                                </li>

                            </ul>
                            <form class="d-flex" id="navbtn">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Login</button>

                            </form>
                        </div>
                    </div>
                </nav>
            </div>



            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" >

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <h4 class="modal-title fs-5" id="exampleModalLabel"><span></span>the GREAT table<span></span></h4>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Email</label>
                                    <input type="email" class="form-control" id="loginInput" />
                                </div>
                                <div class="mb-3" >
                                    <label for="message-text" class="col-form-label">Password</label>
                                    <input type="password" class="form-control" id="loginInput" />
                                </div>
                                <div id="loginBtn">
                                    <button>Login</button>
                                    <p>Dont have account ?  <a href="#">Register</a></p>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
