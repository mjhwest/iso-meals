
import React, { useState, useEffect } from 'react';
//useState hook, to useState in functional components
// useEffect hook to make a request to backend (server)
import Auth from '../utils/auth';
import Product from '../components/Product/Product.js'
import {Row, Col}  from 'react-bootstrap';

//import axios 
import axios from 'axios'

// this below line was commented out 
import products from '../products';


const Products = () => {

  // this was added 
  const [products, setProducts ] = useState([])

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const {data} = await axios.get('/api/products')

  //     setProducts(data)
  //   }
  
  //     fetchProducts()
  // }, [])
 
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((responseJson) => {
        setProducts(responseJson.data);
      });
  }, []);



  return (
    <>

    <h1> View Our Food Bundles</h1>
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




// import React, { useState, useEffect } from 'react';
// //useEffect = make a request to the backend
// import Auth from '../utils/auth';
// import Product from '../components/Product/Product.js'
// import axios from 'axios'

// //comment out
// import products from '../products';
// import {Row, Col}  from 'react-bootstrap';


// const Products = () => {
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data } = await axios.get('/api/products')

//       setProducts(data)
//     }

//     fetchProducts()
//   }, [])

//   return (
//     <>

//     <h1> View Our Food Bundles</h1>
//     <Row>
//       {/* TRYING TO LOOP THROUGH PRODUCTS.js using.map to make a list  */}
//       {products.map(product => (
//         <Col sm={12} md={6} lg={4} ex={3}>
//           <Product product={product} />
//       </Col>
//       ))}

//     </Row>

//     </>

//   )
// };

// export default Products;
