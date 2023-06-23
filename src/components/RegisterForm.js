import "./LoginForm.css";
import menulogo from "../asset/menulogo.jpeg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../features/usersApiSlice";
import { setCredentials } from "../features/authSlice";
import { useState, useEffect } from "react";

const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);
    const [login, { }] = useLoginMutation();

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
        <div id='loginFormBox'>
            <form onSubmit={submitHandler} >
                <div id="loginFormImg">
                    <img src={menulogo} id="loginImg" />
                </div>

                <h4 class="modal-title fs-5" id="exampleModalLabel"><span></span>the GREAT table<span></span></h4>
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Email</label>
                    <input type="email" class="form-control" id="loginInput" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="mb-3" >
                    <label for="message-text" class="col-form-label">Password</label>
                    <input type="password" class="form-control" id="loginInput" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="mb-3" >
                    <label for="message-text" class="col-form-label">Password</label>
                    <input type="password" class="form-control" id="loginInput" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div id="loginBtn">
                    <button type="submit">Login</button>
                    <p>Already have account ?  <a href="#" onClick={()=>{navigate("/login")}}>Login</a></p>
                </div>
            </form>
        </div>
    )
}
export default RegisterForm;