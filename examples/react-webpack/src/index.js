'use strict';

import React from 'react';
import { render } from 'react-dom';

import Title from './app';

render(
  // Paraq que funciona no formato do JSX, é preciso ter o preset do babel para react instalado econfigurado no .babelrc
  // React.createElement(Title),
  <Title />,
  // Por que estamos usando um atributo data e não um id, como normalmente?
  // O problema de utilizar o id é que cada vez que você utiliza um id para um elemento HTML, ele gera uma variável global em window
  document.querySelector('[data-js="app"]')
);
