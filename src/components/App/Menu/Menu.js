import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <img src={this.props.user.photoURL}
             alt="avatar"
             className="Menu__avatar"
        />
      </div>
    );
  }
}

export default Menu;