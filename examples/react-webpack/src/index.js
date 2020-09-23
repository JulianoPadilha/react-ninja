'use strict';

const React = require('react');
const ReactDOM = require('react-dom'); 

const Title = require('./app');

ReactDOM.render(
  React.createElement(Title),
  // Por que estamos usando um atributo data e não um id, como normalmente?
  // O problema de utilizar o id é que cada vez que você utiliza um id para um elemento HTML, ele gera uma variável global em window
  document.querySelector('[data-js="app"]')
);