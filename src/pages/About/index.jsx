import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const About = () => {
  return (
    <div className="about">
      <Link className="about-goBack" to="/">
        <span>&#8592;</span> <sapn> Go Back</sapn>
      </Link>
      <h1>About This Blog</h1>
      <p>
        Welcome to our blog! This platform is designed to share insightful posts
        on a variety of topics, ranging from technology and lifestyle to travel,
        food, and art. Whether you're a curious learner, an avid reader, or
        someone seeking inspiration, you're in the right place.
      </p>

      <h2>What You'll Find Here</h2>
      <ul>
        <li>
          <strong>Tech Insights:</strong> Learn about the latest tools, trends,
          and practices in the ever-evolving world of technology.
        </li>
        <li>
          <strong>Lifestyle Tips:</strong> Discover ways to enhance your
          day-to-day life, from fitness routines to personal development.
        </li>
        <li>
          <strong>Travel Adventures:</strong> Explore destinations, travel tips,
          and unique experiences that inspire wanderlust.
        </li>
        <li>
          <strong>Food & Cooking:</strong> Delight in mouth-watering recipes and
          culinary hacks to make every meal memorable.
        </li>
        <li>
          <strong>Creative Inspiration:</strong> Unleash your creativity with
          articles about art, design, and innovative ideas.
        </li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        Our mission is to create a dynamic platform where readers can access
        high-quality, thought-provoking articles that inspire, educate, and
        entertain. We aim to foster a community that values curiosity and
        lifelong learning.
      </p>

      <h2>About the Creator</h2>
      <div className="creator-section">
        <img
          src="/assets/images/creator.jpg"
          alt="Creator of the Blog"
          className="about-image"
        />
        <p>
          This blog was built as part of a React project, showcasing the power
          of modern web development. The creator is passionate about building
          intuitive and engaging web applications. With a background in frontend
          development and a love for creativity, this blog serves as both a
          project showcase and a resource for like-minded individuals.
        </p>
      </div>

      <h2>Get Involved</h2>
      <p>
        We love hearing from our readers! If you have suggestions, ideas for
        articles, or just want to say hello, feel free to reach out. You can
        also contribute by sharing our articles with your friends or engaging
        with us on social media.
      </p>

      <h2>Join Our Journey</h2>
      <p>
        Follow us as we explore new topics, share stories, and build a community
        of knowledge and inspiration. Whether you're here for the tech tips or
        the travel tales, we're glad to have you along for the ride.
      </p>

      <footer className="about-footer">
        <p>Connect with us on:</p>
        <div className="social-links">
          <a
            href="https://x.com/kenny_olaniyi"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/kehinde-gabriel-olaniyi-610444119/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/K-Gabby" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} K-Gabby Blog. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
