import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <main>
      <div className="hero-background">
        <div className="hero-para flex-row justifty-center">
          <br></br>
          Are you feeling unwell? <br></br>
          Have you been told to isolate suddenly? <br></br>
          Let the team at Iso Meals feed you.
          <br></br>
          Simply pick your food bundle, and we will deliver a weeks worth of food to you!         <br></br>
        </div>
        <div className="hero-picture"> 
        <div className="home-button">
        <Link className="btn btn-dark my-3" to="/products">
            Go To Products
          </Link>
        </div>
         </div>
      </div>
    </main>
  );
};

export default Home;
