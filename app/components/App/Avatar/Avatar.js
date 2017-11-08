import React, {Component} from 'react';
import styles from './Avatar.scss';

class Avatar extends Component {
  render() {
    return (
      <div className={styles.Avatar}>
        <img src={this.props.src} alt="avatar"/>
      </div>
    );
  }
}

export default Avatar;