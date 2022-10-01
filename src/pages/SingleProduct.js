import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import products from '../data'

const SingleProduct = () => {
    const {productId} = useParams();
    const singleProduct = products.find(product => product.id === productId);
    const {name,image} = singleProduct;
  return (
    <section className='section'>
        <h3>{name}</h3>
        <img src={image} alt="product image" style={{display:'block'}} />
        <Link to='/products'>back to products</Link>
    </section>
  )
}

export default SingleProduct