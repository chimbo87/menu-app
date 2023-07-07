import "./OurBlog.css";
// import home01 from "../asset/home 01.jpeg";
// import home02 from "../asset/home 02.jpeg";
// import home03 from "../asset/front03.jpg";
// import home05 from "../asset/front05.jpg";
import { useState, useEffect } from "react";
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
//   const handleFilter = (event) => {
//     const newData = filterRecords.filter((row) =>
//       row.name.toLowerCase().includes(event.target.value.toLowerCase())
//     );
//     setBlogs(newData);
//   };
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
                    <div id="blogIcons"><i class='bx bx-like'></i><small>201</small></div>
                    <div id="blogIcons"><i class='bx bx-share-alt' ></i><small>8</small></div>
                    <div id="blogIcons"><i class='bx bx-comment'></i><small>25</small></div>
                   
                </div>
                <div>
                    <small><i>02 July 2023</i></small>
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
