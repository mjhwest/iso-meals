import React, { useState, useEffect, useReducer } from "react";
import Product from "../components/Product/Product.js";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import { Row, Col, Button } from "react-bootstrap";
import "./product.css";

const buttons = [
  { name: "All", value: "All" },
  { name: "Classic", value: "Classic" },
  { name: "Gluten Free", value: "Gluten-Free" },
  { name: "Vegan", value: "Vegan" },
  { name: "Paleo", value: "Paleo" },
  { name: "Vegetarian", value: "Vegetarian" },
];

const Products = () => {
  
  const [ initProducts, setInitProducts ] = useState({});
  const { loading, data, error, status } = useQuery(QUERY_ALL_PRODUCTS, { onCompleted: setInitProducts }, { fetchPolicy: "no-cache" });
  
  const theProducts = initProducts.products;
  // console.log(loading)
  const initialState = { products: [] }

  // Set reducer states according to button clicked
  const myReducer = (prevState, action) => {
    console.log(action.type);
    switch(action.type) {
      case "LOAD":
        return { products: theProducts }
      case "All":
        return { products: theProducts }
      case "Classic":
        var classicArr = []
        for (let i = 0; i < theProducts.length; i++) {
          classicArr.push(theProducts[i].category === "Classic" ? theProducts[i] : '');
        }
        classicArr.filter(n => n);
        return { products: classicArr.filter(n => n) }
      case "Gluten Free":
        var gfArr = []
        for (let i = 0; i < theProducts.length; i++) {
          gfArr.push(theProducts[i].category === "Gluten-Free" ? theProducts[i] : '');
        }
        gfArr.filter(n => n);
        return { products: gfArr.filter(n => n) }
      case "Vegan":
        var veganArr = []
        for (let i = 0; i < theProducts.length; i++) {
          veganArr.push(theProducts[i].category === "Vegan" ? theProducts[i] : '');
        }
        veganArr.filter(n => n);
        return { products: veganArr.filter(n => n) }
      case "Paleo":
        var paleoArr = []
        for (let i = 0; i < theProducts.length; i++) {
          paleoArr.push(theProducts[i].category === "Paleo" ? theProducts[i] : '');
        }
        paleoArr.filter(n => n);
        return { products: paleoArr.filter(n => n) }
      case "Vegetarian":
        var vegetarianArr = []
        for (let i = 0; i < theProducts.length; i++) {
          vegetarianArr.push(theProducts[i].category === "Vegetarian" ? theProducts[i] : '');
        }
        vegetarianArr.filter(n => n);
        return { products: vegetarianArr.filter(n => n) }
      default:
        throw new Error()
        // return { products: theProducts }
    }
  }

  const [state, dispatch] = useReducer(myReducer, initialState);
  
  // Define all reducer types to map with buttons
  const load = () => ({ type: "LOAD" });
  const all = () => ({ type: "All" });
  const classic = () => ({ type: "Classic" });
  const glutenFree = () => ({ type: "Gluten Free" });
  const vegan = () => ({ type: "Vegan" });
  const paleo = () => ({ type: "Paleo" });
  const vegetarian = () => ({ type: "Vegetarian" });

  useEffect(
    function onLoad() {
      setTimeout(() => {
        dispatch(load())
      }, 500);
  }, []);

  return (
    <>
      <div className="bundle-title"> View Our Food Bundles</div>

      <div className="search-bundle"> Search For a Bundle </div>

      {buttons.map(({ name, value }) => (
          <Button
            key={name}
            value={value}
            className="item-search"
            onClick={() => {
              switch(name) {
                case "All":
                  return dispatch(all());
                case "Classic":
                  return dispatch(classic());
                case "Gluten Free":
                  return dispatch(glutenFree());
                case "Vegan":
                  return dispatch(vegan());
                case "Paleo":
                  return dispatch(paleo());
                case "Vegetarian":
                  return dispatch(vegetarian());
                default:
                  console.log('somethings wrong')
              }
            }}
          >
            {name}
          </Button>
        ))}
      <Row>

        { 
        loading ? ( <div>Loading</div> ) : (
            state.products.map((product) => (
              
              <Col sm={12} md={6} lg={4} ex={1} key={product._id} >
                <Product product={product} />
              </Col>
            ))
          )
        }
     
      </Row>
    </>
  );
};

export default Products;