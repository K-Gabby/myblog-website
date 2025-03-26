import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const BlogUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorAvatar, setAuthorAvatar] = useState(null);
  const [createdAt, setCreatedAt] = useState("");
  const [cover, setCover] = useState(null);
  const navigate = useNavigate();

  // Handle Cover Image Upload
  const handleCoverChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCover(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Author Avatar Upload
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAuthorAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get existing blogs from localStorage
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Generate unique ID based on the last blog entry
    const newId = existingBlogs.length
      ? existingBlogs[existingBlogs.length - 1].id + 1
      : 1;

    const newBlog = {
      id: Number(newId), // 👈 Ensure ID is a number
      title,
      description,
      category,
      subCategory: [subCategory || category],
      authorName,
      authorAvatar,
      createdAt: createdAt || new Date().toLocaleDateString(),
      cover,
    };

    // Add the new blog to the beginning of the array
    const updatedBlogs = [newBlog, ...existingBlogs];

    // Save to localStorage
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    console.log("New blog added:", newBlog);

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="blog-upload">
      <h2>Upload a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <label>Subcategory (Optional)</label>
        <input
          type="text"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        />

        <label>Author Name</label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          required
        />

        <label>Author Avatar</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          required
        />
        {authorAvatar && (
          <img
            src={authorAvatar}
            alt="Author Avatar Preview"
            className="avatar-preview"
          />
        )}

        <label>Created At</label>
        <input
          type="date"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
        />

        <label>Cover Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleCoverChange}
          required
        />
        {cover && (
          <img src={cover} alt="Cover Preview" className="cover-preview" />
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogUpload;
