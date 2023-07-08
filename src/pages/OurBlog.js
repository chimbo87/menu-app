import "./OurBlog.css";
import { useState, useEffect } from "react";
import { compareAsc, format } from "date-fns";
const OurBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  const getBlogs = async () => {
    const response = await fetch("http://localhost:5000/api/users/blogs").then(
      (response) => response.json()
    );
    {
      setBlogs(response);
      setFilterRecords(response);
    }

    console.log("our blogs list:", response);
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="container" id="blogContainer">
      {blogs.map((blog) => {
        return (
          <>
            <div class="row" id="blogWrap">
              <div class="col-lg-6 md-4" id="blogImg">
                <img src={blog.image} />
              </div>

              <div class="col-lg-6 md-4" id="blogsText">
                <h5>{blog.title}</h5>
                <p>{blog.description}</p>
                <div id="blogViews">
                  <div id="blogLinks">
                    <div id="blogIcons">
                      <i class="bx bx-like"></i>
                      <small>201</small>
                    </div>
                    <div id="blogIcons">
                      <i class="bx bx-share-alt"></i>
                      <small>8</small>
                    </div>
                    <div id="blogIcons">
                      <i class="bx bx-comment"></i>
                      <small>25</small>
                    </div>
                  </div>
                  <div>
                    <small>
                      <i>{format(new Date(blog.createdAt), "yyyy-MM-dd HH:mm")}</i>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default OurBlog;
