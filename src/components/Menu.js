import menu from "../asset/home 01.jpeg";
import "./Menu.css";
function Menu() {
    return (
        <>
            <div class="container " id="menuInputs">
                <div class="row" id="menuInputsWrap">
                    <div class="col-lg-4">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Menu</option>
                            <option value="1">Break Fast</option>
                            <option value="2">Meals</option>
                            <option value="3">Diserts</option>
                            <option value="3">Drinks</option>
                        </select>
                    </div>
                    <div class="col-lg-4">
                        <div>
                            <input type="search" class="form-control" placeholder="Search Menu " aria-label="Username" aria-describedby="addon-wrapping" />
                            
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
        </>
    );
}

export default Menu;
