import React, {useState} from "react";
// Import the `useParams()` hook from React Router
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { QUERY_CART } from "../utils/queries";
//need a query to load cart details
import "./cart.css";
import Auth from "../utils/auth";

const Cart = () => {
  const { products } = useParams();
  const { loading, data } = useQuery(QUERY_CART, {
    fetchPolicy: "no-cache"
  });
  const cartData = data?.user?.cart || [];
  console.log(cartData);

  function calculateTotal() {
    let sum = 0;
    cartData.forEach((product) => {
      sum += parseInt(product.price);
    });
    return sum
  }

  const [cartItem, addToCart ] = useState(" ") 

  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <Link className="btn btn-dark my-3" to="/products">
            Go Back
          </Link>

          <div className="cart-title"> Your Cart Includes</div>

          <Row className="">
            {loading ? (
              <div> Loading...</div>
            ) : (
              cartData.map((cartItem) => (
                <Col key={cartItem._id} sm={12} md={12} lg={12} ex={12}>
                  {/* <Cart  /> We're already in the Cart component. If you try to render a component inside itself it will cause an infinite loop */}
                  <div className="cart-list-items my3 p-3 rounded">
                    <Image src={cartItem.image} className="product-cart-image"/>
                    <div className="product-title">{cartItem.name}: </div>
                    <Col className="product-details">
                      <div className="product-description col text-start">
                        {cartItem.description}
                   
                      </div>
                      <div className="product-price col text-end">
                        ${cartItem.price}
                      </div>
                    </Col>
                  </div>
                </Col>
              ))
            )}
          </Row>

          <div className="total-cost text-end"> Total Price =  ${calculateTotal()}</div>

          <Link
            className="btn-checkout btn-dark my-3 vertical-center text-start"
            to="/products"
          >
            Go To Checkout
          </Link>


        </>
      ) : (
        <div className="cart-login-prompt">
          <Link className="btn btn-dark my-3" to="/login">
            Go To Login
          </Link>

          <h1> To View a Cart, make sure you are logged in! </h1>
        </div>
      )}
    </>
  );
};

export default Cart;
