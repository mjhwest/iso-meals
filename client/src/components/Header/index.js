import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';



import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <header className="nav-container text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0 py-1 page-title ">Iso Meals</h1>
          </Link>
          <p className="m-0 ">Meals For You During Isolation </p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
              <Link className="btn btn-lg btn-light m-2" to="/products"><i className='fa-solid fa-fork-knife'></i>
              {/* this linnk to icon is not working 
              https://fontawesome.com/icons/fork-knife?s=solid
              */}
                Products
              </Link>
              <Link className="btn btn-lg btn-light m-2"  to="/cart"><i className='fas fa-shopping-cart'></i>
                Cart
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login"> 
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup"><i className='fa-solid fa-user-plus'></i>
                Signup
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/products"><i className='fa-solid fa-fork-knife'></i>
              {/* this linnk to icon is not working 
              https://fontawesome.com/icons/fork-knife?s=solid
              */}
                Products
              </Link>
              <Link className="btn btn-lg btn-light m-2"  to="/cart"><i className='fas fa-shopping-cart'></i>
                Cart
              </Link>
            </>
          )}
        </div>
      </div>
    </header>





  );
};

export default Header;
