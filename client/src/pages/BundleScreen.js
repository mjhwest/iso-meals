import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating/Rating'
import products from '../products'
import { useParams } from "react-router-dom";


const BundleScreen = ({match}) => {

// const products = products.find((p) => p._id === match.params.id)

const product = products.find((p) => p._id === match.params.id )

  return (
    <div>{product.name}</div>
    // <div> Bundle Page</div>
  )
}

export default BundleScreen