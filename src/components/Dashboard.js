import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="container-fluid" id="dashboardLayout">
            <div>
                <div class="col-lg-4" id="canval">
                    <button class="btn btn-primary d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>



                <div class="offcanvas-md offcanvas-start" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel" >
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Dashboard</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body" id="canvasList">
                        <h4>DASHBOARD</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <Link className="nav-link  active" to="menu" as={Link} id="navTxt">
                                    Our menu
                                </Link>
                            </li>
                            <li class="list-group-item">
                                <Link className="nav-link" to="booking" as={Link} id="navTxt">
                                    Booking
                                </Link>
                            </li>
                            <li class="list-group-item">
                                <Link className="nav-link" to="transaction" as={Link} id="navTxt">
                                    Transactions
                                </Link>
                            </li>

                            <li class="list-group-item">Book a Table</li>
                            <li class="list-group-item">Support</li>
                            <li class="list-group-item" onClick={()=>{navigate("/")}}>Logout</li>
                            <div id="dashboardLinks">
                                <i class='bx bxl-facebook'></i>
                               
                                <i class='bx bxl-twitter'></i>
                                <i class='bx bxl-youtube'></i>
                                <i class='bx bxl-instagram'></i>

                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    )
}
export default Dashboard;