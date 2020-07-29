import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => (<h1 align='center'>Not Found - 404</h1>);


ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,
  
      <Route component={App} />
  */
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/home" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => (<h1 align='center'>Not Found - 404</h1>)} />
      <Route component={Pagina404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
