import React, {Component} from 'react';
import Product from './Product';

class Dashboard extends Component{
  

  render() {
    
    let mappedProducts = this.props.inventory.map((eachProduct) => {
      return (
        <Product key={eachProduct.index} inventory={eachProduct} product_name={eachProduct.product_name} price={eachProduct.price} image_url={eachProduct.image_url} />
      )
    })
    
    
    return(
      <div>
        <h3>Dashboard</h3>
        {mappedProducts}
      </div>
    )
  }
}

export default Dashboard;