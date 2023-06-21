import { useState, useEffect } from "react";
import "./Header.css";
import menulogo from "../asset/menulogo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { useLogoutMutation } from "../features/usersApiSlice";
import { useLoginMutation } from "../features/usersApiSlice";
import { setCredentials } from "../features/authSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogoutForm from "./LogoutForm";

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


    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);
    const [login, { }] = useLoginMutation();

    const [isLogin, setIsLogin] = useState(true);
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard')
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/dashboard');
            toast.success("login successful")
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
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
                            <div class="d-flex" id="navbtn">
                                {userInfo ? (
                                    <>
                                        
                                        <div class="dropdown-center" id="userInfor">
                                            <button class="btn dropdown-toggle d-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="btnUserInfo">
                                              {userInfo.name}
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                                <li><a class="dropdown-item" href="#"  onClick={logoutHandler}>Log out</a></li>
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link className="nav-link" to="/blog" as={Link} id="navTxt">
                                            Our blog
                                        </Link>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" id="loginButton">Login</button>
                                    </>
                                )}




                            </div>
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
                                <form onSubmit={submitHandler} >
                                    <h4 class="modal-title fs-5" id="exampleModalLabel"><span></span>the GREAT table<span></span></h4>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Email</label>
                                        <input type="email" class="form-control" id="loginInput" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div class="mb-3" >
                                        <label for="message-text" class="col-form-label">Password</label>
                                        <input type="password" class="form-control" id="loginInput" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div id="loginBtn">
                                        <button type="submit">Login</button>
                                        <p>Dont have account ?  <a href="#" onClick={toggleForm}>Register</a></p>

                                    </div>
                                </form>) : (
                                <div>
                                    <LogoutForm />
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
