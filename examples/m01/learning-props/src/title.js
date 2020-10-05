'use strict'

import React from 'react'

// Usando shorthand notation no lugar de usar o objeto props
const Title = ({ name, lastName }) => (
  <h1>Olá { `${name} ${lastName}` }</h1>
)

// Método estático da nossa função
Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem sobrenome'
}

// const Title = React.createClass({
//   // O getDefaultProps define valores default para as props, com isso evitamos fazer validações direto no método render
//   getDefaultProps () {
//     return {
//       name: 'Desconhecido',
//       lastName: 'Sem sobrenome'
//     }
//   },

//   render () {
//     return (
//       <h1>Olá {this.props.name + ' ' + this.props.lastName}!</h1>
//     )
//   }
// })

export default Title
