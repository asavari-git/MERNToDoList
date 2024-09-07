import React from "react";
import "./AboutUs.css";

const aboutUs = () => {
  return (
    <div className="aboutus d-flex justify-content-center align-items-cente">
      <div className="container">
        <div className="about">
        <h1>About Us</h1>
        </div>
        
        <p>
          Welcome to Todo App, the ultimate solution for organizing your
          tasks and staying productive. We created this platform with one goal
          in mind: to help people manage their daily to-do lists with ease and
          efficiency. Whether you're balancing personal tasks, work projects, or
          long-term goals, YourTodoApp provides the tools you need to stay on
          track.
        </p>
      </div>
    </div>
  );
};

export default aboutUs;
