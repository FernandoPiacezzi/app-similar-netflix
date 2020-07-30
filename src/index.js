import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import Pagina404 from './pages/404/Pagina404';
import CadastroCategoria from './pages/cadastro/Categoria';





ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component= {CadastroVideo} />
      <Route path="/cadastro/categoria" component= {CadastroCategoria} />
      <Route component={Pagina404} />

    </Switch>

    {/* <CadastroVideo />
    <CadastroCategoria /> */}
  </Router>,
  document.getElementById('root')
);


