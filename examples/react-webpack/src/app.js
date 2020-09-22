'use strict';

// Opção 1
function sum(value1,  value2) {
  return value1 + value2;
}
module.exports = sum;

// =================================

// Opção 2
// module.exports = (value1,  value2) => value1 + value2;

// =================================

// Opção 3
// exports.sum = (value1,  value2) => value1 + value2;

// Com a opção 3 a forma como é importado muda, pois agora estamos exportando um objeto com a propriedade sum
