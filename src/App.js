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
        <Links
          user={this.state.user}
        />
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
            <li><Link to="/profile">My profile</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route exact path="/profile" render={() => {
            return (<UserProfile user={this.props.user}/>);
          }} />
          <Route exact path="/contacts" render={() => {
            return (
              this.props.user ?
                <Contacts user={this.props.user}/>
              :
                null
            );
          }} />
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

class UserProfile extends Component {
  render() {
    let imgStyle = {
      'maxHeight': '50px',
      'maxWidth': '50px'
    };

    return (
      <div className="UserProfile">
        {this.props.user ?
          <div>
            <img src={this.props.user.photoURL}
                 alt="profile"
                 style={ imgStyle }
            /><br/>
            {this.props.user.displayName}<br/>
            {this.props.user.email}
          </div>
        :
          <div>You need to login</div>
        }
      </div>
    );
  }
}

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      error: null
    };
  }
  fetchContacts() {
    if (this.props.user) {
      let db = firebase.firestore();
      let userId = this.props.user.uid;
      let contactsRef = db
        .collection('users')
        .doc(userId)
        .collection('contacts');
      let contacts = [];
      contactsRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          contacts.push(doc.data());
          this.setState({contacts: contacts});
        });
      }).catch((error) => {
        this.setState({error: error});
      });
    }
  }
  componentWillMount() {
    this.fetchContacts();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.fetchContacts();
    }
  }
  render() {
    return (
      <div className="Contacts">
        Contacts
        { this.state.error ?
          <div>Error: {this.state.error.message}</div>
          :
          ''
        }
        <ul>
          {
            this.state.contacts.map(
              contact => <li key={contact.uniqueId}>{contact.name}</li>
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
