import menulogo from "../asset/menulogo.jpeg";
import { useState, useEffect } from "react";
import menu02 from "../asset/menu01.jpeg";
import menu03 from "../asset/menu02.jpeg";
import menu04 from "../asset/menu03.jpeg";
import menu05 from "../asset/menu04.jpeg";
import menu06 from "../asset/menu05.jpeg";

import "./Menu.css";
function Menu() {
  const [products, setProducts] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      "http://localhost:5000/api/users/products"
    ).then((response) => response.json());
    {
      setProducts(response);
      setFilterRecords(response);
    }

    console.log("our products list:", response);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const handleFilter = (event) => {
    const newData = filterRecords.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setProducts(newData);
  };
  return (
    <>
      <div id="menuHeaderText">
        <div id="menuHeaderTextBox">
          <select class="form-select" aria-label="Default select example">
            <option selected>Filter All</option>
            <option value="1">Meals</option>
            <option value="2">Salads</option>
            <option value="3">Diserts</option>
            <option value="3">Drinks</option>
          </select>
        </div>
        <div id="menuHeaderTextBox">
          <div class="input-group flex-nowrap" id="menuHeaderTextBoxInput">
            <input
              type="text"
              class="form-control"
              placeholder="Search dish.."
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div id="menuHeaderTextBoxIcon">
            <i class="bx bx-shopping-bag"></i>
            <span>2</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu06} />

            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu02} />
            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu03} />
            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu04} />
            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu05} />
            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu03} />
            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu02} />
            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu05} />
            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu03} />
            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu04} />
            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu05} />
            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div id="theMenuCardBox">
            <img src={menu02} />
            <div id="theMenuCardBoxWrap">
              <p>MEALS</p>

              <small>Chicken, Salads and Fries</small>

              <p>$4.50</p>

              <div id="theMenuCardBoxBtn">
                <button id="theMenuCardBoxBtnA">
                  <small>Add to Cart</small>
                </button>
                <button id="theMenuCardBoxBtnB">
                  <small>Read more</small>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* <div id="menuGroup">
                <div class="container" id="menuInputs">
                    <div class="row" id="menuInputsWrap">


                        <div class="col-lg-4">
                            <div id="menuSearch">
                                <input type="search" class="form-control" placeholder="Search Menu " aria-label="Username" aria-describedby="addon-wrapping"  onChange={handleFilter}/>
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
                              <div class="row ">
                                    {
                                        products.map((product) => {
                                            return(
                                           
                                            <div class="col-md-3" id="productBox">
                                                <div id="productWrap">
                                                    <img src={product.image} />
                                                    <div><h5>{product.title}</h5></div>
                                                     <div>
                                                        <small>{product.name}</small>
                                                     </div>
                                                     <div>
                                                        <small>R{product.price}</small>
                                                     </div>
                                                        <button>Order Now</button>
                                                  </div>
                                            </div>
                                            
                                            )
                                            
                                        })
                                    }
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
            </div> */}
    </>
  );
}

export default Menu;
