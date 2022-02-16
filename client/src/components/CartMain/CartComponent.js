import React from "react"; 
import {Card} from "react-bootstrap";
import "./Cart.css"; 
import {Link } from "react-router-dom";

const Cart = ({ cart })=> {



return (

<Card className="my-3 p-3 rounded">

      <Card.Body>
        <Link to={`/cart/${cart._id}`}>
          <Card.Title as="div">
            <div className="card-body-title">
              <strong>{product.name}</strong>
            </div>
          </Card.Title>
        </Link>



        </Card.Body>
</Card>



);
};

export default Cart; 