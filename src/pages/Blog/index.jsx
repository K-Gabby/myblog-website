import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogList as defaultBlogs } from "../../config/data";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Get blogs from localStorage
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Merge with defaultBlogs (optional)
    const allBlogs = [...storedBlogs, ...defaultBlogs];

    // Find the blog by id
    const foundBlog = allBlogs.find((blog) => blog.id === parseInt(id));

    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [id]);

  return (
    <div>
      <Link className="blog-goBack" to="/">
        <span>&#8592;</span> <span>Go Back</span>
      </Link>

      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, index) => (
                <div key={index}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;
