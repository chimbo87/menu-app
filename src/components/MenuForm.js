import { useState } from "react";
import "./MenuForm.css";
const MenuForm = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageurl, setImageurl] = useState("");

  const submitRegHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/users/products", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        name: name,
        price: price,
        image: imageurl,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    console.log(result);
    setTitle("");
    setName("");
    setPrice("");
    setImageurl("");
  };

  return (
    <div id="menuForm">
      <h5>Add menu items to user page</h5>
      <form id="menuInput" onSubmit={submitRegHandler}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Dish Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Dish Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Dish Price
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Dish Image Url
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            value={imageurl}
            onChange={(e) => setImageurl(e.target.value)}
          />
        </div>
        <div id="menuFormBtn">
          <button type="submit">Create Menu</button>
        </div>
      </form>
    </div>
  );
};
export default MenuForm;
