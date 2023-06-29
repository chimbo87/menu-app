import "./Admin.css";

import { Link, Outlet } from "react-router-dom";
const Admin = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg ">
                <div class="container" >
                    <a class="navbar-brand" href="#" id="adminHead">ADMINPANEL</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >

                            <Link className="nav-link " to="menuform" as={Link} id="adminTxt">
                                Add-menu
                            </Link>
                            <Link className="nav-link" to="menulist" as={Link} id="adminTxt">
                                Menu-list
                            </Link>

                            <Link className="nav-link" to="blogform" as={Link} id="adminTxt">
                                Add-blog
                            </Link>
                            <Link className="nav-link" to="blogform" as={Link} id="adminTxt">
                                Blog-list
                            </Link>
                            <Link className="nav-link" to="users" as={Link} id="adminTxt">
                                View-users
                            </Link>
                            <Link className="nav-link" to="feedbacks" as={Link} id="adminTxt">
                                feedbacks
                            </Link>
                            <Link className="nav-link" to="sales" as={Link} id="adminTxt">
                                Sales
                            </Link>
                            <Link className="nav-link" to="sales" as={Link} id="adminTxt">
                                Subscribers
                            </Link>

                        </ul>
                        <form class="d-flex" role="search">
                           
                            <button type="button" class="btn btn-secondary position-relative " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                notifications
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                    6+
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>




            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" id="adminPanel">
                <Outlet />
            </div>

        </>
    )
}
export default Admin;