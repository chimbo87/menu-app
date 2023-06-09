import menu from "../asset/home 01.jpeg";
import menulogo from "../asset/menulogo.jpeg";
import "./Menu.css";
function Menu() {
    return (
        <>
            <div class="container " id="menuInputs">
                <div class="row" id="menuInputsWrap">
                    <div class="col-lg-4" id="canval">
                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body" id="canvasList">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Our Menu</li>
                                    <li class="list-group-item">Transactions</li>
                                    <li class="list-group-item">Wallet</li>
                                    <li class="list-group-item">Book a Table</li>
                                    <li class="list-group-item">Support</li>
                                    <li class="list-group-item">Settings</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-4">
                        <div id="menuSearch">
                            <input type="search" class="form-control" placeholder="Search Menu " aria-label="Username" aria-describedby="addon-wrapping" />
                            <div class="btn-group">
                                <button class="btn  btn-bg" type="button" id="searchBtn">
                                    Search
                                </button>
                                <button type="button" class="btn btn-bg  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" id="searchBtn">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Breakfast</a></li>
                                    <li><a class="dropdown-item" href="#">Meals</a></li>
                                    <li><a class="dropdown-item" href="#">Salads</a></li>
                                    <li><a class="dropdown-item" href="#">Drinks</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4" id="menuIcon">
                        <div id="itemsIcons">
                            <i class='bx bx-bell'></i>
                            <div id="itemsQty">
                                <small>1</small>
                            </div>
                        </div>
                        <div id="itemsIcons" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i class='bx bx-shopping-bag' ></i>
                            <div id="itemsQty">
                                <small>3</small>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="container text-center" id="menuSection">
                <div class="row">
                    <div class="col" id="menuCard">
                        <img src={menu} id="menuImg" />
                        <small>steak and chips</small>
                        <small>USD 2.99</small>
                        <button>order now</button>
                    </div>
                    <div class="col" id="menuCard">
                        <img src={menu} id="menuImg" />
                        <small>steak and chips</small>
                        <small>USD 2.99</small>
                        <button>order now</button>
                    </div>
                    <div class="col" id="menuCard">
                        <img src={menu} id="menuImg" />
                        <small>steak and chips</small>
                        <small>USD 2.99</small>
                        <button>order now</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col" id="menuCard">
                        <img src={menu} id="menuImg" />
                        <small>steak and chips</small>
                        <small>USD 2.99</small>
                        <button>order now</button>
                    </div>
                    <div class="col" id="menuCard">
                        <img src={menu} id="menuImg" />
                        <small>steak and chips</small>
                        <small>USD 2.99</small>
                        <button>order now</button>
                    </div>
                    <div class="col" id="menuCard">
                        <img src={menu} id="menuImg" />
                        <small>steak and chips</small>
                        <small>USD 2.99</small>
                        <button>order now</button>
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>





            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div id="modalHeader">
                            <h4 class="modal-title fs-5" id="staticBackdropLabel">Cart</h4>
                            <img src={menulogo} id="aboutImg" />
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h5>cart item is here</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
