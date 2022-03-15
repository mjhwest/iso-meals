import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { QUERY_CART } from "../utils/queries";
import "./cart.css";
import Auth from "../utils/auth";
import { REMOVE_FROM_CART } from "../utils/mutations";

//query cart and remove from cart 
const Cart = () => {
  const { products } = useParams();
  const { loading, data, refetch} = useQuery(QUERY_CART, {
    fetchPolicy: "no-cache",
  });

  const [removeCart, { error }]  =useMutation(REMOVE_FROM_CART)

  async function removeItem(productId) {
    await removeCart({
      variables: {productId: productId}
    }) 
    await refetch();

    
  }

  const cartData = data?.user?.cart || [];


//function to calaculate total cost of products in cart 
  function calculateTotal() {
    let sum = 0;
    cartData.forEach((product) => {
      sum += parseInt(product.price);
    });
    return sum;
  }


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
                  <div className="cart-list-items my3 p-3 rounded">
                    <Image
                      src={cartItem.image}
                      className="product-cart-image"
                    />
                    <div className="product-title">{cartItem.name}: </div>
                    <Col className="product-details">
                      <div className="product-description col text-start">
                        {cartItem.description}

                        <div className="remove">
                          <span
                          onClick ={ () =>  removeItem(cartItem._id)}
                          
                           role="img" aria-label="trash">
                            Remove From Cart 🗑️
                          </span>
                        </div>


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

          <div className="total-cost text-end">
            {" "}
            Total Price = ${calculateTotal()}
          </div>

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
