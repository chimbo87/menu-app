import "./BlogForm.css";
import { useEffect } from "react";
const BlogForm = () => {
    
    return (
        <div id="theBlog">

            <h5>Post a blog for users</h5>
            <form id="blogInput">
                <div class="mb-3" >
                    <label for="exampleFormControlInput1" class="form-label">Blog Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Title" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Blog image</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Image Url" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Blog Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add Description"></textarea>
                </div>
                <div id="blogBtn">
                    <button>Post Blog</button>
                </div>

            </form>
        </div>
    )
}
export default BlogForm;