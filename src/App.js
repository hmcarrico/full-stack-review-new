import React, { Component } from 'react';
import routes from './routes';
import Nav from './components/nav/nav';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  login = () => {
    const redirecturi = encodeURIComponent(window.location.origin + '/auth/callback');
    const url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirecturi}&response_type=code`
    window.location = url;
  }

  render() {
    return (
      <div className="app">
      <Nav/>
      {routes}
      </div>
    );
  }
}

export default App;
