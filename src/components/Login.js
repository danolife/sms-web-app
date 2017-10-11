import React, {Component} from 'react';
import firebase from 'firebase';
import 'firebase/auth'


class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setUser(user);
      }
    });
  }
  login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      let user = result.user;
      this.props.setUser(user);
    });
  }
  logout() {
    firebase.auth().signOut().then(() => {
      this.props.setUser(null);
    });
  }
  render() {
    return (
      <div className="wrapper">
        {this.props.user ?
          <div>
            <p>Welcome {this.props.user.displayName}</p>
            <button onClick={this.logout}>Log Out</button>
          </div>
          :
          <div>
            <p>Please log in</p>
            <button onClick={this.login}>Log In</button>
          </div>
        }
      </div>
    );
  }
}

export default Login;