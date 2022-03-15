import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Form, Modal } from "react-bootstrap";
import { QUERY_SINGLE_PRODUCT } from "../utils/queries";
import Rating from "../components/Rating/Rating";
import { ADD_TO_CART } from "../utils/mutations";
import Button from "react-bootstrap/Button";
import "./singleproduct.css";
import Auth from "../utils/auth";

const SingleProduct = () => {
  const [show, setShow] = useState(false);
  const [qty, setQty] = useState();


  const { productId } = useParams();
  const [addToCart, { error }] = useMutation(ADD_TO_CART);


  const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { id: productId },
  });

  const product = data?.product || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = async (event) => {
    event.preventDefault();


    if (!Auth.loggedIn()) {
      setShow(true)
      return 
     }

    try {
      const { data } = await addToCart({
        variables: { productId },
      });

      if (addToCart) {
        console.log("success you added to cart");
        const modal = document.querySelector(".my-modal");
        modal.classList.add("view");
      }
    } catch (e) {
      console.error(e);
    }
    console.log(data);
    console.log("Adding to cart");
  };



  return (
    <>
      <div className="modal-tester">
        {Auth.loggedIn() ? (
          <>
            <div className="my-modal">
              <h1 className="modal-title"> You successfully added a bundle</h1>
              <p> Keep shopping, or go to cart to confirm order.</p>
              <div className="button-container">
                <Link className="btn btn-dark my-3" to="/products">
                  Continue Shopping
                </Link>
                <Link className="btn btn-dark my-3" to="/cart">
                  Go To Cart
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`my-modal ${show  ? 'view' : '' }`}>
              <h1 className="modal-title"> You need to login / sign up</h1>
              <p> Please login / signup so you can add an item to your cart </p>
              <div className="button-container">
                <Link className="btn btn-dark my-3" to="/signup">
                  Go To Signup
                </Link>
                <Link className="btn btn-dark my-3" to="/login">
                  Go To Login
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      <></>
      <>
        <Link className="btn btn-dark my-3" to="/products">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup className="product-card-details" variant="flush">
              <ListGroup.Item>
                <h2>{product.name} </h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col> Price: </Col>
                    <Col>
                      <strong> ${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col> Status: </Col>
                    <Col>
                      {product.countInStock > 1 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col> Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.tatget.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    </>
  );
};

export default SingleProduct;

