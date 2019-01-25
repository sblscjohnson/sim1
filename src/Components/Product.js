import React from 'react';

const Product = (props) => {
  
  return(
    <div className="boxes">
      <div>
        <img className="thePic" src={props.image_url} alt='rip' />
      </div>
      <div>
        <h3>Name: {props.product_name}</h3>
        <h3>Price: ${props.price}</h3>
        <button className="butt">Delete</button>
      </div>
    </div>
  )
}

export default Product;