import React, {Component} from 'react';
import Product from './Product';

class Dashboard extends Component{
  

  render() {
    
    let mappedProducts = this.props.inventory.map((eachProduct) => {
      return (
        <div className="allThings">
          <Product  key={eachProduct.index} inventory={eachProduct} product_name={eachProduct.product_name} price={eachProduct.price} image_url={eachProduct.image_url} />
        </div>
      )
    })
    
    
    return(
      <div className="theDashboard">
        {mappedProducts}
      </div>
    )
  }
}

export default Dashboard;