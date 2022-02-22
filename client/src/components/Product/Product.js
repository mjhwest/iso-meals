import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating/Rating";
import "./product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="product-card-background my-3 p-3 rounded">
      <Link to={`/products/${product._id}`}>
        <div
          className="pic-test"
          style={{ background: `url(${product.image})` }}
        ></div>
      </Link>

      <Card.Footer>
        <Link to={`/products/${product._id}`}>
          <Card.Title as="div">
            <div className="card-body-title">
              <strong>{product.name}</strong>
            </div>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3"> ${product.price}</Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default Product;
