import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './fire';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to sms-web-app</h1>
        </header>
        <Login
          setUser={this.setUser}
          user={this.state.user}
        />
        <Links/>
      </div>
    );
  }
}

class Links extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route exact path="/users" component={Users}/>
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Home
      </div>
    );
  }
}

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentWillMount(){
    let db = firebase.firestore();
    let users = [];
    db.collection('users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let user = doc.data();
        user.id = doc.id;
        users.push(user);
        this.setState({users: users});
      });
    });
  }
  render() {
    return (
      <div className="Users">
        Users
        <ul>
          {
            this.state.users.map(
              user => <li key={user.id}>{user.name}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

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

export default App;
