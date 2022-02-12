import React, { useState } from 'react';
import Auth from '../utils/auth';
import products from '../products';
import {Row, Col}  from 'react-bootstrap';


const Products = () => {

  return (
    <>
    <div className="product-title flex-row justify-center">
    <h1> Food Bundles  </h1>
    </div>

  
     
    {/* <h1> Food Bundles  </h1>
    <Row> 
        {products.map( product => (
          <Col sm={12} md={6} lg={4} xl={3}>
              <h3> {product.name} </h3>
          </Col>
        ))}

    </Row>
     */}
    </>

  )
};

export default Products;
