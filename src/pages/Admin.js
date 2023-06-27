import "./Admin.css";

import { Link, Outlet } from "react-router-dom";
const Admin = () => {
    return (
        <>
            <div className="container" id="theAdmin">
                <ul class="list-group list-group-flush" id="adminBtn">
                    <li class="list-group-item">
                        <Link className="nav-link  active" to="menuform" as={Link} id="adminTxt">
                             Add Menu
                        </Link>
                    </li>
                    <li class="list-group-item">
                        <Link className="nav-link" to="blogform" as={Link} id="adminTxt">
                             Add Blog
                        </Link>
                    </li>
                    <li class="list-group-item">
                        <Link className="nav-link" to="users" as={Link} id="adminTxt">
                            View Users
                        </Link>
                    </li>
                    <li class="list-group-item">
                        <Link className="nav-link" to="users" as={Link} id="adminTxt">
                            View Feedbacks
                        </Link>
                    </li>
                    <li class="list-group-item">
                        <Link className="nav-link" to="menulist" as={Link} id="adminTxt">
                            Menu list
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