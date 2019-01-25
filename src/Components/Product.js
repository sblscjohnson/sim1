import React from 'react';

const Product = (props) => {
  
  return(
    <div>
      <img src={props.image_url} alt='rip' />
      {console.log(props.product_name)}
      <h3>Name: {props.product_name}</h3>
      {console.log(props.price)}
      <h3>Price: ${props.price}</h3>
    </div>
  )
}

export default Product;