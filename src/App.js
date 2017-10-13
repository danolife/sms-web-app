import React, {Component} from 'react';
import './App.css';
import './fire';
import Links from './components/Links';
import Login from './components/Login/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.setUser = this.setUser.bind(this)
  }
  setUser(user) {
    this.setState({user: user});
  }
  render() {
    return (
      <div className="App">
        {
          this.state.user ?
            <div>
              <Login
                setUser={this.setUser}
                user={this.state.user}
              />
              <Links
                user={this.state.user}
              />
            </div>
          :
            <Login
              setUser={this.setUser}
              user={this.state.user}
            />
        }
      </div>
    );
  }
}

export default App;
