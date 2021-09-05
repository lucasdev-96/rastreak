import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import pictures from './pages/pictures';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/fotos" component={pictures} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
