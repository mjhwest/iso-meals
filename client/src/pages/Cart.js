import React from "react";
// Import the `useParams()` hook from React Router
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import {ADD_TO_CART} from "../utils/mutations"


const Cart = () => {


    return (
        <>
        <h1> Your Food Bundles</h1>
         <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Col md={6}>
          <Image src={addToCart.image} alt={addToCart.name} fluid />
        </Col>
        
        </>
    )


}

export default Cart