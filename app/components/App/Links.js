import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home';
import Contacts from './Contacts';

class Links extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route exact path="/contacts" render={() => {
            return (
              this.props.user ?
                <div>
                  <Contacts user={this.props.user}/>
                </div>
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