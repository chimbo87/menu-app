import "./MenuList.css";
import { useState, useEffect } from "react";
const MenuList = () => {
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
    <div>
      <div id="menuListInput">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleFilter}
          style={{
            padding: "6px 15px",
            border: "1px solid gray",
            margin: "4px 4px",
          }}
        />
      </div>
      <table class="table table-striped  table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">TITLE</th>
            <th scope="col">NAME</th>
            <th scope="col">PRICE</th>
            <th scope="col">DATE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>

        {products.map((product) => {
          return (
            <tbody>
              <tr>
                <td>
                  <small>{product._id}</small>
                </td>
                <td>
                  <small>{product.title}</small>
                </td>
                <td>
                  <small>{product.name}</small>
                </td>
                <td>
                  <small>R{product.price}</small>
                </td>
                <td>
                  <small>{product.createdAt}</small>
                </td>
                <td>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    id="menuUpdateBtn"
                  >
                    Update
                  </button>
                  <button id="menuRemoveBtn">Remove</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Update Menu
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Update Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuList;
