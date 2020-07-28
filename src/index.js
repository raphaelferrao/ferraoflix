import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';

const Pagina404 = () => {
  return (
    <div>
      Página 404
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Switch>
        <Route path="/cadastro/video" component={CadastroVideo}  />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route path="/" component={Home} exact />
        <Route component={Pagina404} />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
