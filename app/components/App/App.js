import React, {Component} from 'react';
import styles from './App.scss';
import '../../fire';
import Links from './Links';
import Login from './Login/Login';
import Menu from './Menu/Menu';
import Conversations from './Conversations/Conversations';
import MobileChecker from './Mobile/MobileChecker';
import MobileApp from './Mobile/MobileApp';

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
    if (MobileChecker.check()) {
      return (
        <MobileApp/>
      );
    }
    return (
      <div className={styles.App}>
        {
          this.state.user ?
            <div className={styles.container}>
              <div className={styles.leftPane}>
                <Menu
                  user={this.state.user}
                  setUser={this.setUser}
                />
                <Conversations
                  user={this.state.user}
                />
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
