import "./Login.css";
import { Outlet } from "react-router-dom";
const Login = () => {
    return (
        <div className="container-fluid" id="formBox">
            <div >
                <Outlet id="formWrap">

                </Outlet>
            </div>

        </div>
    )
}
export default Login;