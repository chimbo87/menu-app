import "./Dashboard.css";
import menulogo from "../asset/menulogo.jpeg";
import avat from "../asset/avat.jpg";
import Booking from './Booking';
import Menu from './Menu';
import NavBar from './NavBar';
import Transactions from './Transactions';
import { Route, Routes } from 'react-router-dom';
function Dashboard() {
    return (
        <div className="container-fluid" >
            <div className="container-fluid" id="topNav">
                <div id="navBarLogo">
                    <img src={menulogo} id="menuImg" />
                    <h5>the<span>GREAT</span>table</h5>
                </div>

                <div id="avatar">
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-shopping-cart"></i>
                    <img src={avat} />
                </div>
            </div>
            <div id="dashboard">
                <NavBar />
                <Routes>
                    <Route path='menu' element={<Menu />} />
                    <Route path='/transactions' element={<Transactions />} />
                    <Route path='/booking' element={<Booking />} />
                </Routes>
            </div>

        </div>
    );
}

export default Dashboard;
