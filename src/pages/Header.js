import { useState } from "react";
import "./Header.css";
import menulogo from "../asset/menulogo.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };
    return (
        <>
            <div className="container-fluid">

                <nav class="navbar navbar-expand-lg bg-body-tertiary"  >
                    <div class="container-fluid" id="mainNav">
                        <a class="navbar-brand" href="#" id="logoBox"> <img src={menulogo} id="aboutImg" /><small>theGREATtable</small></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link className="nav-link" to="/" as={Link} id="navTxt">
                                        
                                    </Link>
                                </li>
                               
                                {/* <li class="nav-item">
                                    <Link className="nav-link" to="/menu" as={Link} id="navTxt">
                                        Menu
                                    </Link>
                                </li> */}

                            </ul>
                            <form class="d-flex" id="navbtn">
                            
                                    <Link className="nav-link" to="/blog" as={Link} id="navTxt">
                                        Our blog
                                    </Link>
                                
                                
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
                            {isLogin ? (
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
                                        <button  onClick={()=>{navigate("/dashboard")}}>Login</button>
                                        <p>Dont have account ?  <a href="#" onClick={toggleForm}>Register</a></p>

                                    </div>
                                </form>) : (
                                <form>
                                    <h4 class="modal-title fs-5" id="exampleModalLabel"><span></span>the GREAT table<span></span></h4>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Enter Full Name</label>
                                        <input type="text" class="form-control" id="loginInput" />
                                    </div>
                                    <div class="mb-3" >
                                        <label for="message-text" class="col-form-label">Enter Your Email</label>
                                        <input type="email" class="form-control" id="loginInput" />
                                    </div>
                                    <div class="mb-3" >
                                        <label for="message-text" class="col-form-label">Create Password</label>
                                        <input type="password" class="form-control" id="loginInput" />
                                    </div>
                                    <div id="loginBtn">
                                        <button>Create Account</button>
                                        <p>Already have account ?  <a href="#" onClick={toggleForm}>Login</a></p>

                                    </div>
                                </form>)}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
