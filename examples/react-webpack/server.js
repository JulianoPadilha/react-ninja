'user strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

// Configuramos um novo servidor passando por padrão o webpack com o arquivo de config
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  // Para permitir o hot reload
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
  // A porta 3000 é a porta que foi definida no entry do arquivo de config do webpack
}).listen(3000, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Listening on http://localhost:3000')
})
