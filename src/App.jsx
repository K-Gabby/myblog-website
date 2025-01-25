import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ChatBot from "./components/ChatBot";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
      {/* Chatbot placed outside of Routes to be globally available */}
      <ChatBot />
    </div>
  );
};

export default App;
