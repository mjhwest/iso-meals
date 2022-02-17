import React from "react";
import Product from "../components/Product/Product.js";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS} from '../utils/queries';
import { Row, Col } from "react-bootstrap";
import "./product.css";


const Products = () => {

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

  console.log(products)

  return (
    <>
      <h1> View Our Food Bundles</h1>
      <Row>
  

        {
          loading ? (
            <div> Loading</div>
            ) : (
              products?.map((product) => (
                <Col sm={12} md={6} lg={4} ex={1} key={product._id} >
            <Product product={product} />
          </Col>
        )))}
     
      </Row>
    </>
  );
};

export default Products;
