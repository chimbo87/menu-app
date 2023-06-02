import "./Dashboard.css";
import menulogo from "../asset/menulogo.jpeg";
import avat from "../asset/avat.jpg";
import Booking from './Booking';
import Menu from './Menu';
// import NavBar from './NavBar';
import Transactions from './Transactions';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Rootlayout from "./Rootlayout";
function Dashboard() {
    const router = createBrowserRouter(createRoutesFromElements(

        <Route path='/' element={<Rootlayout />}>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/transactions' element={<Transactions />}></Route>
            <Route path='/booking' element={<Booking />}></Route>
        </Route>
    ))
    return (
        <div className="container-fluid" >
            <div className="container-fluid" id="topNav">
                <div id="navBarLogo">
                    <img src={menulogo} id="menuImg" />
                    <h5>the<span>GREAT</span>table</h5>
                </div>

                <div id="avatar">
                <i class='bx bx-heart'></i>
                <i class='bx bx-cart'></i>
                    <img src={avat} />
                </div>
            </div>
            <div id="dashboard">
                <RouterProvider router={router} />
            </div>

        </div>
    );
}

export default Dashboard;
