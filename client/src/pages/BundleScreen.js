import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating/Rating";
import products from "../products";
import { useParams } from "react-router-dom";
import axios from 'axios'


const BundleScreen = ({parent, props }) => {
  const params = useParams();
  // console.log(props)
  const [product, setProducts ] = useState([])


  console.log(params)
  useEffect(()=> {
    axios.get(`http://localhost:5000/api/products/${params.id}`)
    .then(res => {
        console.log(res)
        setProducts(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
}, [params.id])



  // const product = products.find((p) => p._id === match.params.id);

  // console.log(product.image)

  return (
    <>
      <Link className="btn btn-dark my-3" to="/products">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          {/* <img src={product.image}  alt={product.name} className="fluid"/> */}
            <Image src={product.image}  alt={product.name} fluid/>
            
          {/* <Image src={product.image} alt={product.name} fluid /> */}
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
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col> Price:  </Col>
                            <Col>
                            <strong> ${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col> Status:  </Col>
                            <Col>
                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={product.countInStock === 0 }>
                            Add to Cart
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
             </Col>
      </Row>
    </>
    // <div>{product.name}</div>
    // <div> Bundle Page</div>
  );
};

export default BundleScreen;
