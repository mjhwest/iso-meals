import React, { useState } from 'react';
import Auth from '../utils/auth';
import products from '../products';
import {Row, Col}  from 'react-bootstrap';


const Products = () => {

  return (
    <>

    <h1> Latest Products</h1>
    <Row>
      {/* TRYING TO LOOP THROUGH PRODUCTS.js using.map to make a list  */}
      {products.map(product => (
        <Col sm={12} md={6} lg={4} ex={3}>
      <h3>{product.name} </h3>
      </Col>
      ))}

    </Row>
    {/* <Row>
      {products.map(products => (
        // <Col sm={12} md={6} lg={4} xl={3}>
          <h3> {products.name}</h3>
        </Col>
      ))}
    </Row> */}
    </>

  )
};

export default Products;
