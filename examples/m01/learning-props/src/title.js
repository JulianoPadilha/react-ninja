'use strict'

import React from 'react'

const Title = React.createClass({
  // O getDefaultProps define valores default para as props, com isso evitamos fazer validações direto no método render
  getDefaultProps () {
    return {
      name: 'Desconhecido',
      lastName: 'Sem sobrenome'
    }
  },

  render () {
    return (
      <h1>Olá {this.props.name + ' ' + this.props.lastName}!</h1>
    )
  }
})

export default Title
