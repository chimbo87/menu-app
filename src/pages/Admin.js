import "./Admin.css";

import { Link, Outlet } from "react-router-dom";
const Admin = () => {
    return (
        <>
            <div className="container" id="theAdmin">
                <ul class="list-group list-group-flush" id="adminBtn">
                    <li class="list-group-item">
                        <Link className="nav-link  active" to="menuform" as={Link} id="adminTxt">
                            + add menu
                        </Link>
                    </li>
                    <li class="list-group-item">
                        <Link className="nav-link" to="blogform" as={Link} id="adminTxt">
                            + add blog
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="container" id="adminPanel">
            <Outlet />
            </div>
            
        </>
    )
}
export default Admin;