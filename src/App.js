import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Hero from './components/Hero';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Hero} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
