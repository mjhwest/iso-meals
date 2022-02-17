import React from "react";
// Import the `useParams()` hook from React Router
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { ADD_TO_CART } from "../utils/mutations";
import { QUERY_CART } from "../utils/queries";
//need a query to load cart details
import "./cart.css"


const Cart = () => {
  const { products } = useParams();

  // 1) useQuery, to ask back end what is in the cart
  const { loading, data } = useQuery(QUERY_CART);
  const cartData = data?.user?.cart;

  console.log(cartData)

  return (


    <>
<Link className="btn btn-dark my-3" to="/products">
  Go Back
</Link>

<div className="cart-title"> Your Cart Includes</div>

<Row>
  {loading ? (
    <div> Loading...</div>
  ) : (
    cartData.map((cartItem) => (
      <Col
        key={cartItem._id}
        sm={12} md={12} lg={12} ex={12}
      >
        {/* <Cart  /> We're already in the Cart component. If you try to render a component inside itself it will cause an infinite loop */}
        <div className="cart-list-items my3 p-3 rounded">
          <div className="product-title"> {cartItem.name}: </div>
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
    )
    )
  )}

  <Link className="btn btn-dark my-3" to="/products">
    Go To Checkout
  </Link>
</Row>
</>

    // <>
    // <Link className="btn btn-dark my-3" to="/products">
    //     Go Back
    //   </Link>
    //   <div className="cart-title"> Your Cart Includes</div>
    // <Row>
    //   {
    //       loading ? (
    //           <div> Loading...</div>
    //       ) : (
    //           cartData.map((cartItem) => (
    //               <Col key={cartItem._id} sm={12} md={6} lg={4} ex={3} >
    //                   {/* <Cart  /> We're already in the Cart component. If you try to render a component inside itself it will cause an infinite loop */} 
    //                  <div className="cart-list-items my3 p-3 rounded"> 
    //                   <h1>
    //                   {cartItem.name}, 
    //                   </h1>
    //                   {cartItem.description}
    //                   ${cartItem.price}
    //                  </div>
                       
    //               </Col>
    //           ))
    //       )
    //   }
    // </Row>
    // </>
  );
};

export default Cart;
