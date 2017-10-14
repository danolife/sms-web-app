import React, {Component} from 'react';
import './App.css';
import '../../fire';
import Links from './Links';
import Login from './Login/Login';
import Menu from './Menu/Menu';
import Conversations from './Conversations/Conversations';

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
            <div className="container">
              <div className="leftPane">
                <Menu
                  user={this.state.user}
                  setUser={this.setUser}
                />
                <Conversations/>
              </div>
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
