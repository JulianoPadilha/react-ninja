// Webpack vai ler um arquivo fonte e gerar um bundle. Então dizemos para o webpack como ele vai criar e onde ele vai salvar esse arquivo

// Mais sobre use strict: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode 
'use strict';

// Importa o path do Node
const path = require('path');

// Exportamos um objeto utilizando o module.exports do CommonJS para o webpack fazer a leitura do nosso arquivo e gerar o bundle
module.exports  = {
  // Diz para o webpack gerar um mapa do arquivo original. Muito útil para debugar o código.
  devtool: 'source-map',
  // Entrada com o caminho do nosso arquivo principal
  // O __dirname é uma variável global do Node
  // O path.join vai juntar os três valores para o caminho funcionar em qualquer sistema operacional
  entry: path.join(__dirname, 'src', 'index'),
  // Caminho de saída do que o webpack ler do entry
  output: {
    path: path.join(__dirname, 'dist'),
    //  Nome do arquivo que será gerado
    filename: 'bundle.js',
    //  O publicPath é o local onde o webpack-dev-server ficar assistindo as nossas alterações nos arquivos de desenvolvimento
    // Quando exeutamos o webpack-dev-server, ele não vai gerar um arquivo físico, ele gera um arquivo virtual em memória e o publicPath diz onde esse arquivo vai residir
    publicPath: '/static/'
  },
  module: {
    // Cada loader diz para o Webpack o que ele deve fazer com cada tipo de arquivo
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }
}