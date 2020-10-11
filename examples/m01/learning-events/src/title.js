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

export default Title
