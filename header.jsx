import React, { Component } from 'react'

export class Header extends Component {
    constructor()
    {
        super()
        this.state={name:"Aravind"}
    }
    update=()=>
    {
        this.setState({name:"Nirmal"})
    }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.name}</h1>
        <button onClick={this.update}>update</button>
      </div>
    )
  }
}

export default Header