import React, { useState } from "react";
//useState hook, to useState in functional components
// useEffect hook to make a request to backend (server)
import Product from "../components/Product/Product.js";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS} from '../utils/queries';
import { Row, Col } from "react-bootstrap";


const Products = () => {

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

  return (
    <>
      <h1> View Our Food Bundles</h1>
      <Row>
        {/* TRYING TO LOOP THROUGH PRODUCTS.js using.map to make a list  */}
        {
        loading ? (
          <div> Loading</div>
        ) : (
        products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} ex={3}>
            <Product product={product} />
          </Col>
        )))}
      </Row>
    </>
  );
};

export default Products;
