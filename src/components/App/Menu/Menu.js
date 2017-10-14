import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="Menu__avatar">
          <img src={this.props.user.photoURL} alt="avatar"/>
        </div>
      </div>
    );
  }
}

export default Menu;