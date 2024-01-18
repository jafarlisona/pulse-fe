import React from "react";
import "./index.scss";
function Welcome() {
  return (
    <section id="welcome">
      <div className="container">
        <i className="fa-solid fa-bell-concierge"></i>
        <div className="title">
          <div className="line"></div>
          <h1>Our Services</h1>
          <div className="line"></div>
        </div>
        <div className="cards">
          <div className="card">
            <i className="fa-solid fa-mug-hot"></i>
            <h2>Breakfast</h2>
            <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-mug-hot"></i>
            <h2>Breakfast</h2>
            <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-mug-hot"></i>
            <h2>Breakfast</h2>
            <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </p>
          </div>
          <div className="card">
            <i className="fa-solid fa-mug-hot"></i>
            <h2>Breakfast</h2>
            <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
