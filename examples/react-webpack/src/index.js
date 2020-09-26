'use strict';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const renderApp = (NextApp) => {
  render(
    // Para que funciona no formato do JSX, é preciso ter o preset do babel para react instalado econfigurado no .babelrc
    // React.createElement(Title),

    // O AppContainer é um módulo de dentro do react-hot-loader que serve de wrapper para nosso componente e entende que tudo que estiver dentro dele deve ser atualizado automaticamente
    <AppContainer>
      <NextApp />
    </AppContainer>,
    // Por que estamos usando um atributo data e não um id, como normalmente?
    // O problema de utilizar o id é que cada vez que você utiliza um id para um elemento HTML, ele gera uma variável global em window
    document.querySelector('[data-js="app"]')
  );
}

renderApp(App);

// O hot-loader também expõe um objeto 'module'. Se esse objeto existir sabemos que o hot loader está habilitado. E não devemos usar o hot-loader em produção
if (module.hot) {
  module.hot.accept('./app', () => {
    // Sempre que o ./app for alterado ou algum arquivop interno dele for alterado, nós fazemos um require novamente no nosso app para ser renderizado
    // Sempre que for importar um módulo do ES Modules para CommonJS, precisamos acrescentar o default no final
    const NextApp = require('./app').default;
    renderApp(NextApp);
  });
}