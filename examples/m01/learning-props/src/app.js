'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container'>
        {
          ['yellow', 'blue', 'green'].map(color => (
            <Square key={color} color={color} />
          ))
        }
      </div>
    )
  }
}

export default App
