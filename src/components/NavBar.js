import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar(){
    return(
      <div id="navbar">
       
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0 position-sticky">
              <li className="nav-item">
                <Link className="nav-link" to={"/menu"} id="navTxt">
                Our menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/transactions"} id="navTxt">
                  Transactions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/booking"} id="navTxt">
                  Book a table
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/booking"} id="navTxt">
                  Notifications
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/booking"} id="navTxt">
                  Chat with Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/booking"} id="navTxt">
                 Settings
                </Link>
              </li>
             
            </ul>
      </div>
    )
}
export default NavBar;