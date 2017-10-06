import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './fire';
import firebase from 'firebase';
import 'firebase/firestore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []}
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to sms-web-app</h1>
        </header>
        <h2>Users:</h2>
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

export default App;
