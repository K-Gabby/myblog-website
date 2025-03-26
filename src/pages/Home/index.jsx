import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";
import { blogList as defaultBlogs } from "../../config/data";
import EmptyList from "../../components/common/EmptyList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    // Retrieve from localStorage and merge with default blogs
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const combinedBlogs = [...storedBlogs, ...defaultBlogs];

    // Remove duplicates based on title
    const uniqueBlogs = Array.from(
      new Map(combinedBlogs.map((blog) => [blog.title, blog])).values()
    );

    setBlogs(uniqueBlogs);
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }
  }, [blogs]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = JSON.parse(localStorage.getItem("blogs")) || defaultBlogs;
    const filteredBlogs = allBlogs.filter(
      (blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()) ||
        blog.title.toLowerCase().includes(searchKey.toLowerCase().trim()) ||
        blog.description.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setSearchKey("");
    setBlogs(JSON.parse(localStorage.getItem("blogs")) || defaultBlogs);
  };

  return (
    <div>
      <Header />

      {/* Upload Button */}
      <div className="upload-section">
        <Link to="/upload" className="upload-btn">
          Upload a New Blog
        </Link>
      </div>

      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} /> }
    </div>
  );
};

export default Home;
