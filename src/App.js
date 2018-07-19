import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import loginComp from './Components/login.js';
import homeComp from './Components/home.js';
import another from './Components/another.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={homeComp} />
          <Route exact path="/login" component={loginComp} />
          <Route path="/login/another" component={another} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
