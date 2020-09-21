// Webpack vai ler um arquivo fonte e gerar um bundle. Então dizemos para o webpack como ele vai criar e onde ele vai salvar esse arquivo
'use strict';

// Importa o path do Node
const path = require('path');

// Exportamos um objeto utilizando o module.exports do CommonJS para o webpack fazer a leitura do nosso arquivo e gerar o bundle
module.exports  = {
  // Entrada com o caminho do nosso arquivo principal
  // O __dirname é uma variável global do Node
  // O path.join vai juntar os três valores para o caminho funcionar em qualquer sistema operacional
  entry: path.join(__dirname, 'src', 'index'),
  // Caminho de saída do que o webpack ler do entry
  output: {
     path: path.join(__dirname, 'dist'),
    //  Nome do arquivo que será gerado
     filename: 'bundle.js'
  }
}