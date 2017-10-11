import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home';
import UserProfile from './UserProfile';
import Contacts from './Contacts';

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

export default Links;