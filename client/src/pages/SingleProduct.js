import React from "react";
// Import the `useParams()` hook from React Router
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { QUERY_SINGLE_PRODUCT } from "../utils/queries";
import Rating from "../components/Rating/Rating";
import { ADD_TO_CART } from "../utils/mutations";
 

const SingleProduct = () => {
  const { productId } = useParams();
  const [addToCart, {error}] = useMutation(ADD_TO_CART);
  console.log(productId);

  const { loading, data  } = useQuery(QUERY_SINGLE_PRODUCT, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: { id: productId },
  });

  const product = data?.product || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = async (event) => {
    event.preventDefault();
    console.log(productId);

    try {
      const { data } = await addToCart({
        variables: { productId },
      });
    } catch (e) {
      console.error(e);
    }
    console.log(data)
    console.log("Adding to cart");
  }

  console.log(product);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/products">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
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
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
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
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
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
  );
};

export default SingleProduct;
