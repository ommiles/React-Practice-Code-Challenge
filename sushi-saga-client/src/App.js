import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = 'http://localhost:3000/sushis'

class App extends Component {

  state = {
    sushi: [],
    plates: [],
    balance: 100
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushi => this.setState({ sushi: sushi.slice(0, 4) }))
  }

  buySushi = (e, price) => {
    // ! this remove() method needs to be refactored
    e.target.parentNode.remove()
    const sushiName = e.target.id
    const ITEM_API = `http://localhost:3000/sushis/${sushiName}`
    const configObj = {
      method: 'DELETE'
    }
    fetch(ITEM_API, configObj)
    .then(this.componentDidMount())
    .then(this.setState({
      plates: [...this.state.plates, ''],
      balance: this.state.balance - price
    }))
  }

  handleSubmit = (e) => {
    // ! refactoring needed for if else statement for balance below 0
    e.preventDefault()
    console.log(e.target.amount.value)
    this.setState({
      balance: this.state.balance + (parseInt(e.target.amount.value))
    })
    e.target.reset()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} buySushi={this.buySushi} handleClick={this.handleClick} handleSubmit={this.handleSubmit} />
        <Table updatePlates={this.state.plates} balance={this.state.balance} />
      </div>
    )
  }
}

export default App;