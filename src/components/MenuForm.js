import "./MenuForm.css";
const MenuForm = () => {
    return (
        <div id="menuForm">
            <h5>Add menu items to user page</h5>
            <form id="menuInput">
                <div class="mb-3" >
                    <label for="exampleFormControlInput1" class="form-label">Dish Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Title" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Dish Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Dish Price</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Price" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Dish Image Url</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Image Url" />
                </div>
                <div id="menuFormBtn">
                    <button>Add Menu</button>
                </div>

            </form>
        </div>
    )
}
export default MenuForm;