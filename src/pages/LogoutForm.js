import { useState, useEffect } from "react";
import "./Header.css";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRegisterMutation } from "../features/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../features/authSlice";
import Header from "./Header";
const Logoutform = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setRegEmail] = useState("");
    const [password, setRegPassword] = useState("");
    const { userInfo } = useSelector((state) => state.auth);
    const [register, { }] = useRegisterMutation();

    const [isLogin, setIsLogin] = useState(true);
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo]);


    const submitRegHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await register({ name, email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            toggleForm()
        } catch (err) {
            console.log(err)
            toast.error(err?.data?.message || err.error);
        }
    };
    return (
        <div>
                <form onSubmit={submitRegHandler}>
                    <h4 class="modal-title fs-5" id="exampleModalLabel"><span></span>the GREAT table<span></span></h4>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Enter Full Name</label>
                        <input type="text" class="form-control" id="loginInput" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="mb-3" >
                        <label for="message-text" class="col-form-label">Enter Your Email</label>
                        <input type="email" class="form-control" id="loginInput" value={email} onChange={(e) => setRegEmail(e.target.value)} />
                    </div>
                    <div class="mb-3" >
                        <label for="message-text" class="col-form-label">Create Password</label>
                        <input type="password" class="form-control" id="loginInput" value={password} onChange={(e) => setRegPassword(e.target.value)} />
                    </div>
                    <div id="loginBtn">
                        <button>Create Account</button>
                        <p>Already have account ?  <a href="#" >Login</a></p>
                    </div>
                </form>
                <div>
                  
                </div>
            
        </div>
    )
}

export default Logoutform;