import React from 'react';

const Product = (props) => {
  
  return(
    <div>
      <img src={props.image} alt='rip' />
      <h3>Name: {props.name}</h3>
      <h3>Price: ${props.price}</h3>
    </div>
  )
}

export default Product;