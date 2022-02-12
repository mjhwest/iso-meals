import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../Rating/Rating'
import './Product.css';
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded' >
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top' />
        </Link>


        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <div className='card-body-title'> 
                    <strong >{product.name}</strong>
                    </div>
                </Card.Title>
            </Link>

            <Card.Text as='div'> 
            <Rating 
            value={product.rating} 
            text={`${product.numReviews} reveiws`} /> 
            {/* <div className='my-3'>
                {product.rating} from {product.numReviews} reveiws
                </div> */}
                </Card.Text>

            <Card.Text as="h3"> ${product.price}</Card.Text>
            
        </Card.Body>

    </Card>
  )
}

export default Product