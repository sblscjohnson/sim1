import React, {Component} from 'react';
import axios from 'axios'

class Form extends Component{
  constructor() {
    super()
    this.state= {
      inventory: [],
      image_url: '',
      product_name: '',
      price: '',
    }
  }

  handleChangeImageURL(value) {
    this.setState({
      image_url: value
    })
  }

  handleChangeProductName(value) {
    this.setState({
      product_name: value
    })
  }

  handleChangePrice(value) {
    this.setState({
      price: value
    })
  }

  handleClear() {
    this.setState({
      image_url: '',
      product_name: '',
      price: ''
    })
  }

  

  handleAddProduct() {
    let bodyObj = {
      image_url: this.state.image_url,
      product_name: this.state.product_name,
      price: this.state.price
    }
    axios.post('/api/inventory', bodyObj).then(response => {
      this.setState({
        inventory: response.data
      })
    })

    this.handleClear()
    this.props.getInventory()
    
  }
  

  render() {
    return(
      <div className="theForm">
        <h4>Image URL:</h4>
        <input type="text" onChange={(e) => this.handleChangeImageURL(e.target.value)}
        value={this.state.image_url} />
        <h4>Product Name:</h4>
        <input type="text" onChange={(e) => this.handleChangeProductName(e.target.value)}
        value={this.state.product_name} />
        {console.log(this.state)}
        <h4>Price:</h4>
        <input type="text" onChange={(e) => this.handleChangePrice(e.target.value)}
        value={this.state.price} />
        <div className="theButtons">
          <button className="butt" onClick={() => this.handleAddProduct()}>Add to Inventory</button>
          <button className="butt" onClick={() => this.handleClear()}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default Form;