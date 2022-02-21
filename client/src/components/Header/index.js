import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [isOpened, setOpened] = useState("false");

  const MobileClick = () => {
    console.log("clicked");
    setOpened(!isOpened);
  };


  return (
    <header className="nav-container text-light mb-4 py-3 flex-row align-center">
      <div className="nav-display container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0 py-1 page-title ">Iso Meals</h1>
          </Link>
          <p className="m-0 ">Meals For You During Isolation </p>
        </div>

        <div className="hamburger" onClick={MobileClick}>
          <i className="fa-solid fa-burger fa-3x"></i>

        </div>

        <div className="nav-items">
          {Auth.loggedIn() ? (
            <>
              <span>Hey, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
              <Link className="btn btn-lg btn-light m-2" to="/products">
                <i className="fa-solid fa-fork-knife"></i>
                {/* this linnk to icon is not working 
              https://fontawesome.com/icons/fork-knife?s=solid
              */}
                Products
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/contact">
              <i className="fa-solid fa-message-middle"></i>
               {/* this is not working */}
                Contact
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/cart">
                <i className="fas fa-shopping-cart"></i>
                Cart
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-light m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/contact">
              <i className="fa-solid fa-message-middle"></i>
               {/* this is not working */}
                Contact
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                <i className="fa-solid fa-user-plus"></i>
                Signup
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/products">
                <i className="fa-solid fa-fork-knife"></i>
                {/* this linnk to icon is not working 
              https://fontawesome.com/icons/fork-knife?s=solid
              */}
                Products
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/cart">
                <i className="fas fa-shopping-cart"></i>
                Cart
              </Link>
            </>
          )}
        </div>

        {/* ******************MOBILE DISPLAY************************************************* */}

        <div className="mobile-container">

          <div className={`mobile-menu ${isOpened ? " " : "opened"} `}>
            {Auth.loggedIn() ? (
              <>
                <span>Hey, {Auth.getProfile().data.username}!</span>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
                <Link
                  className="btn btn-lg btn-light m-2"
                  to="/products"
                  onClick={MobileClick}
                >
                  <i className="fa-solid fa-fork-knife"></i>
                  {/* this linnk to icon is not working 
              https://fontawesome.com/icons/fork-knife?s=solid
            */}
                  Products
                </Link>
                <Link className="btn btn-lg btn-light m-2" to="/contact">
              <i className="fa-solid fa-message-middle"></i>
               {/* this is not working */}
                Contact
              </Link>
                <Link
                  className="btn btn-lg btn-light m-2"
                  to="/cart"
                  onClick={MobileClick}
                >
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="btn btn-lg btn-light m-2"
                  to="/login"
                  onClick={MobileClick}
                >
                  Login
                </Link>
                <Link
                  className="btn btn-lg btn-light m-2"
                  to="/signup"
                  onClick={MobileClick}
                >
                  <i className="fa-solid fa-user-plus"></i>
                  Signup
                </Link>
                <Link
                  className="btn btn-lg btn-light m-2"
                  to="/contact"
                  onClick={MobileClick}
                >
                  <i className="btn btn-lg btn-light m-2"></i>
                  Contact
                </Link>
                <Link
                  className="btn btn-lg btn-light m-2"
                  to="/products"
                  onClick={MobileClick}
                >
                  <i className="fa-solid fa-fork-knife"></i>
                  {/* this linnk to icon is not working 
              https://fontawesome.com/icons/fork-knife?s=solid
            */}
                  Products
                </Link>
                <Link
                  className="btn btn-lg btn-light m-2"
                  to="/cart"
                  onClick={MobileClick}
                >
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
