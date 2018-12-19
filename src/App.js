import React, { Component } from 'react';
import Home from './pages/Home';
import { Route, Switch, Redirect } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}



export default App;
