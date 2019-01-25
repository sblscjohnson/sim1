import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './Components/Header'
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import {HashRouter, Route, Switch, Link} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
    this.handleGetInventory=this.handleGetInventory.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }

  handleGetInventory() {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }
  
  


  render() {
    return (
      // <HashRouter>
        <div className="App">
          <Header />
          <div className="theThings">
            <Dashboard inventory={this.state.inventory} />
            <Form getInventory={this.handleGetInventory} />
          </div>
        </div>
      // </HashRouter>
    );
  }
}

export default App;
