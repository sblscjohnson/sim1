import React, {Component} from 'react';

class Form extends Component{
  constructor() {
    super()
    this.state= {
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

  handleAddProduct() {

    this.setState({
      image_url: '',
      product_name: '',
      price: ''
    })
  }

  handleCancel() {
    this.setState({
      image_url: '',
      product_name: '',
      price: ''
    })
    console.log(this.state)
  }

  render() {
    return(
      <div>
        <p>Image URL:</p>
        <input type="text" onChange={(e) => this.handleChangeImageURL(e.target.value)} />
        <p>Product Name:</p>
        <input type="text" onChange={(e) => this.handleChangeProductName(e.target.value)} />
        <p>Price:</p>
        <input type="text" onChange={(e) => this.handleChangePrice(e.target.value)} />
        <button onClick = {() => this.handleAddProduct()}>Yeet</button>
        <button onClick={() => this.handleCancel()}>Cancel</button>
      </div>
    )
  }
}

export default Form;