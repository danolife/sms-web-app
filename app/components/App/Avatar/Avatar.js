import React, {Component} from 'react';
import './Avatar.css';

class Avatar extends Component {
  render() {
    return (
      <div className="Avatar">
        <img src={this.props.src} alt="avatar"/>
      </div>
    );
  }
}

export default Avatar;