import "./BlogForm.css";
import {useState} from "react";
const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [imageurl,setImageurl] = useState("");
  const [description, setDescription] = useState("");

  const submitRegHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/users/blogs", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        image: imageurl,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    console.log(result);
    setTitle("");
    setDescription("");
    setImageurl("");
  };
  return (
    <div id="theBlog">
      <h5>Post a blog for users</h5>
      <form id="blogInput" onSubmit={submitRegHandler}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Blog Title
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
            Blog image Url
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            value={imageurl}
            onChange={(e) => setImageurl(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Blog Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div id="blogBtn">
          <button>Create Blog</button>
        </div>
      </form>
    </div>
  );
};
export default BlogForm;
