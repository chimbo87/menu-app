import menu from "../asset/home 01.jpeg";
import "./Menu.css";
function Menu() {
    return (

        <div class="container text-center">
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

    );
}

export default Menu;
