import React, {Component} from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import './Login.css';
import GoogleButton from 'react-google-button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
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
  render() {
    return (
      <div className="login">
        <h1 className="login__title">Welcome to SMS7</h1>
        <GoogleButton
          className="login__button"
          type="light"
          onClick={this.login}
        />
      </div>
    );
  }
}

export default Login;