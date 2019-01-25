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
    axios.post('/api/product', bodyObj).then(response => {
      this.setState({
        inventory: response.data
      })
    })

    this.handleClear()
    
  }

  

  render() {
    return(
      <div>
        <p>Image URL:</p>
        <input type="text" onChange={(e) => this.handleChangeImageURL(e.target.value)}
        value={this.state.image_url} />
        <p>Product Name:</p>
        <input type="text" onChange={(e) => this.handleChangeProductName(e.target.value)}
        value={this.state.product_name} />
        {console.log(this.state)}
        <p>Price:</p>
        <input type="text" onChange={(e) => this.handleChangePrice(e.target.value)}
        value={this.state.price} />
        <button onClick = {() => this.handleAddProduct()}>Add to Inventory</button>
        <button onClick={() => this.handleClear()}>Cancel</button>
      </div>
    )
  }
}

export default Form;