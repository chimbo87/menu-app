import "./Dashboard.css";
import menulogo from "../asset/menulogo.jpeg";
import avat from "../asset/avat.jpg";
import Booking from './Booking';
import Menu from './Menu';
import Transactions from './Transactions';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Rootlayout from "./Rootlayout";
import { useSelector } from "react-redux";
function Dashboard() {
    const { amount } = useSelector((store) => store.cart)
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
                    <div id="dashboardIcon">
                        <i class='bx bx-heart'>
                        </i>
                        <div id="dashItem"><small>1</small></div>
                    </div>

                    <div id="dashboardIcon">
                        <i class='bx bx-cart'>
                        </i>

                        <div id="dashItem" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <small>{amount}</small>
                        </div>

                    </div>
                    <img src={avat} />
                </div>
            </div>
            <div id="dashboard">
                <RouterProvider router={router} />
            </div>



            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog  modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Your Cart</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
