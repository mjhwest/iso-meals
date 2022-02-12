import React, { useState } from 'react';
import Auth from '../utils/auth';
import Product from '../components/Product/Product.js'
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
          <Product product={product} />
      </Col>
      ))}

    </Row>

    </>

  )
};

export default Products;
