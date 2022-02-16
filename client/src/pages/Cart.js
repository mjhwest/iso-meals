import React from "react";
// Import the `useParams()` hook from React Router
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import {ADD_TO_CART} from "../utils/mutations"

import {QUERY_CART} from "../utils/queries"
//need a query to load cart details 

const Cart = () => {

    const {products} = useParams(); 

    // 1) useQuery, to ask back end what is in the cart 
    const { loading, data  } = useQuery(QUERY_CART)
    const cart = data?.cart; 



    return (
        <>
        <h1> Your Food Bundles</h1>
         <Link className="btn btn-dark my-3" to="/products">
        Go Back
      </Link>
      <Col md={6}>
          {/* <Image src={addToCart.image} alt={addToCart.name} fluid /> */}
        </Col>

        {/* <Col md={3}>
        <h2> {cart.name} </h2>
        </Col> */}
        
        </>
    )


}

export default Cart