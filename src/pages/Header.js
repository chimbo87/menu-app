import { useState, useEffect } from "react";
import "./Header.css";
import menulogo from "../asset/menulogo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { useLogoutMutation } from "../features/usersApiSlice";


function Header() {

    const [logoutApiCall] = useLogoutMutation();
    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/');
        } catch (err) {
            console.log(err)
        }
    }


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);
   

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard')
        }
    }, [navigate, userInfo]);

  

    return (
        <>
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg bg-body-tertiary"  >
                    <div class="container-fluid" id="mainNav">
                        <div >
                            <Link className="nav-link" to="/" as={Link} id="theLogo">
                                <div>
                                    <img src={menulogo} id="aboutImg" />
                                </div>
                                <div>
                                    <small>theGREATtable</small>
                                </div>
                            </Link>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link className="nav-link" to="/" as={Link} id="navTxt">

                                    </Link>
                                </li>



                            </ul>
                            <div class="d-flex" id="navbtn">
                                {userInfo ? (
                                    <>

                                        <div class="dropdown-center" id="userInfor">
                                            <button class="btn dropdown-toggle d-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="btnUserInfo">
                                                {userInfo.name}
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                                <li><a class="dropdown-item" href="#" onClick={logoutHandler}>Log out</a></li>
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* <Link className="nav-link" to="/admin" as={Link} id="navTxt">
                                            Admin
                                        </Link> */}
                                        <Link className="nav-link" to="/blog" as={Link} id="navTxt">
                                            Our Blog
                                        </Link>
                                        <Link className="nav-link" to="/login" as={Link} id="navTxt">
                                        <button type="button" >
                                                Login
                                        </button>
                                        </Link>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </nav>
            </div>



        </>
    );
}

export default Header;
