'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    // O constructor sempre vai precisar do super quando extendido o Component
    super()
    this.state = {
      text: 'Juliano'
    }
  }
  render () {
    return (
      <div className='container' onClick={() => this.setState({ text: 'Outro nome' })}>
        {this.state.text}
      </div>
    )
  }
}

export default App
