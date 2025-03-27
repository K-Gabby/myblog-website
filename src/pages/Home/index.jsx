import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";
import { blogList as defaultBlogs } from "../../config/data";
import EmptyList from "../../components/common/EmptyList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    // Retrieve blogs from localStorage
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // If localStorage is empty, initialize it with defaultBlogs
    if (storedBlogs.length === 0) {
      localStorage.setItem("blogs", JSON.stringify(defaultBlogs));
      setBlogs(defaultBlogs);
    } else {
      setBlogs(storedBlogs);
    }
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
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
    setBlogs(JSON.parse(localStorage.getItem("blogs")) || []);
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

      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
